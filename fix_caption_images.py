#!/usr/bin/env python3
"""Fix image src under specific captions in projects.html gallery."""
import re

CDN = 'https://mcusercontent.com/d9f0645acdcd85eb1ee1a8067/images/'

# caption text → correct image filename
FIXES = {
    'Brand identity system':  'dc764363-e7f8-824e-5e42-e44458e71e77.png',
    'Branded packaging':      'd9072ce0-27eb-ee4e-baf7-c2dcf2ea68da.png',
    'Skincare product line':  '87e42905-7457-9f7d-0871-072d11b7a212.png',
    'Leather goods brand':    '181156f9-c4f9-a6bc-5cb2-d49cb157e017.png',
    'Coffee brand packaging': '8b689c3d-9321-4b4f-90cd-459a39cf47b9.png',
    'Supplement brand':       '2dca36b8-b09e-1028-ba1c-4f2b036df828.png',
    'Candle brand':           '5583585e-0199-7f98-3097-6311719a7244.png',
}

txt = open('projects.html').read()

# Each card block pattern: img tag followed by <p> with caption
# We match the card, locate the caption, and if it's in FIXES, replace the src in the img tag
# Pattern: one card = opening div ... <img ...src="URL"...> ... <p ...>CAPTION</p> ... closing div

card_pattern = re.compile(
    r'(<div style="background:#111111[^"]*"[^>]*>)\s*'
    r'(<img\s[^>]*src=")(https?://[^"]+)("[^>]*>)\s*'
    r'(<p[^>]*>)(.*?)(</p>)\s*'
    r'(</div>)',
    re.DOTALL
)

changes = 0
def replacer(m):
    global changes
    caption = m.group(6)
    if caption in FIXES:
        correct_src = CDN + FIXES[caption]
        old_src = m.group(3)
        if old_src != correct_src:
            changes += 1
            print(f'  [{caption}]: {old_src.split("/")[-1]} → {FIXES[caption]}')
            return (m.group(1) + '\n    ' + m.group(2) + correct_src + m.group(4) +
                    '\n    ' + m.group(5) + caption + m.group(7) + '\n  ' + m.group(8))
    return m.group(0)

new_txt = card_pattern.sub(replacer, txt)
print(f'\n{changes} src values updated.')

open('projects.html', 'w').write(new_txt)

# ── Print final caption→URL pairing ──────────────────────────────────────────
print('\n=== Final projects gallery caption → image ===')
txt2 = open('projects.html').read()
start = txt2.find('projects-gallery-grid')
block = txt2[start:start+50000]
pairs = re.findall(
    r'src="https://mcusercontent\.com/[^/]+/images/([^"]+)"[^>]*>\s*<p[^>]*>(.*?)</p>',
    block, re.DOTALL
)
for uuid, caption in pairs:
    print(f'  {caption}: {uuid}')
