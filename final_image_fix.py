#!/usr/bin/env python3
import re

CDN = 'https://mcusercontent.com/d9f0645acdcd85eb1ee1a8067/images/'

PROJECTS_FIXES = {
    'Brand identity system':  '5583585e-0199-7f98-3097-6311719a7244.png',
    'Branded packaging':      'd9072ce0-27eb-ee4e-baf7-c2dcf2ea68da.png',
    'Skincare product line':  '87e42905-7457-9f7d-0871-072d11b7a212.png',
    'Leather goods brand':    '2dca36b8-b09e-1028-ba1c-4f2b036df828.png',
    'Supplement brand':       '181156f9-c4f9-a6bc-5cb2-d49cb157e017.png',
    'Candle brand':           'dc764363-e7f8-824e-5e42-e44458e71e77.png',
    'Branded social content': 'e522233b-3d79-ae4c-c9a5-de87f78ce5bf.png',
}

INDEX_FIXES = {
    'Brand identity system':  '5583585e-0199-7f98-3097-6311719a7244.png',
}

# Pattern: card div containing img src + p caption (non-greedy, single card)
CARD_RE = re.compile(
    r'(<div style="background:#111111[^"]*"[^>]*>)\s*'
    r'(<img\s[^>]*?src=")(https?://[^"]+)("[^>]*>)\s*'
    r'(<p[^>]*>)(.*?)(</p>)\s*'
    r'(</div>)',
    re.DOTALL
)

def apply_fixes(fname, fixes, grid_class):
    txt = open(fname).read()
    # Work only inside the gallery section to avoid touching other cards on page
    grid_start = txt.find(grid_class)
    assert grid_start != -1, f'{grid_class} not found in {fname}'
    pre = txt[:grid_start]
    post_start = txt.find('</section>', grid_start)
    gallery = txt[grid_start:post_start]
    suffix = txt[post_start:]

    changes = 0
    def replacer(m):
        nonlocal changes
        caption = m.group(6).strip()
        if caption in fixes:
            new_src = CDN + fixes[caption]
            old_src = m.group(3)
            if old_src != new_src:
                changes += 1
                print(f'  [{caption}]')
                print(f'    old: .../{old_src.split("/")[-1]}')
                print(f'    new: .../{new_src.split("/")[-1]}')
                return (m.group(1) + '\n    ' +
                        m.group(2) + new_src + m.group(4) + '\n    ' +
                        m.group(5) + caption + m.group(7) + '\n  ' +
                        m.group(8))
        return m.group(0)

    new_gallery = CARD_RE.sub(replacer, gallery)
    open(fname, 'w').write(pre + new_gallery + suffix)
    print(f'  → {changes} src values changed in {fname}')

print('=== projects.html ===')
apply_fixes('projects.html', PROJECTS_FIXES, 'projects-gallery-grid')

print('\n=== index.html ===')
apply_fixes('index.html', INDEX_FIXES, 'home-examples-grid')

# ── Print final listings ───────────────────────────────────────────────────
def print_gallery(fname, grid_class, limit):
    txt = open(fname).read()
    start = txt.find(grid_class)
    block = txt[start:start+60000]
    pairs = re.findall(
        r'src="(https://mcusercontent\.com/[^"]+)"[^>]*>\s*<p[^>]*>(.*?)</p>',
        block, re.DOTALL
    )[:limit]
    for i, (url, cap) in enumerate(pairs, 1):
        print(f'{i:2}. "{cap}" → .../{url.split("/")[-1]}')

print('\n\n=== FINAL: projects.html ===')
print_gallery('projects.html', 'projects-gallery-grid', 20)

print('\n=== FINAL: index.html ===')
print_gallery('index.html', 'home-examples-grid', 6)
