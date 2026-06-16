#!/usr/bin/env python3
"""Apply master caption→image mapping across all gallery pages."""
import re, glob

CDN = 'https://mcusercontent.com/d9f0645acdcd85eb1ee1a8067/images/'

MASTER = {
    'Restaurant brand site':               '6d99be78-fe78-2331-3d37-4f87f4aa3da0.png',
    'Insurance company site':              'd1770605-bce7-342f-4932-7c32498c01af.png',
    'Real estate platform':                '2efc8fd3-581f-ea93-348c-187b801cc652.png',
    'Brand identity system':               '5583585e-0199-7f98-3097-6311719a7244.png',
    'Branded packaging':                   'd9072ce0-27eb-ee4e-baf7-c2dcf2ea68da.png',
    'Brand collateral set':                '440a5439-0b40-c7f5-6bcb-fc9cad0be02f.png',
    'Skincare product line':               '87e42905-7457-9f7d-0871-072d11b7a212.png',
    'Product photography':                 '5cf20abe-e508-6cdd-af08-5a076d7ca693.png',
    'Apparel brand':                       'ce896686-ecbd-d9f6-99c4-9a5fce61413a.png',
    'Apparel product imagery':             '9f1d375a-266c-8027-d4b3-bba386331f6d.png',
    'Leather goods brand':                 '2dca36b8-b09e-1028-ba1c-4f2b036df828.png',
    'Coffee brand packaging':              '440a5439-0b40-c7f5-6bcb-fc9cad0be02f.png',
    'Supplement brand':                    '181156f9-c4f9-a6bc-5cb2-d49cb157e017.png',
    'Candle brand':                        'dc764363-e7f8-824e-5e42-e44458e71e77.png',
    'Branded social content':              'e522233b-3d79-ae4c-c9a5-de87f78ce5bf.png',
    'Lead pipeline':                       '396de9b7-9236-14cb-c610-a1e3b954eafc.png',
    'Lead generation system':              '396de9b7-9236-14cb-c610-a1e3b954eafc.png',
    'Automated follow-up sequence':        'aeca10a5-9f90-4da7-7e9b-61cd41f3a4f5.png',
    'AI booking assistant':                'f2e76f39-2e82-668d-bd68-b8c4c70152bc.png',
    'Chat assistant handling questions':   '122f32b9-20be-8bd8-5e00-e819550704c4.png',
    'Ecommerce store':                     '08ac6099-0d25-c660-0c61-7c8bf20bbe29.png',
    'Checkout flow':                       '6db75f94-5d56-0c5b-5f9b-3cd06a3a0751.png',
    'Custom proposal generator':           '4d840d94-6028-b1ec-ce58-f00c425474b7.png',
    'Custom business tool':                '4d840d94-6028-b1ec-ce58-f00c425474b7.png',
    'Custom quote-builder':                '55649e62-0a5c-bbd8-2f54-7ee905c49901.png',
    'Data synced across devices':          '4fb7210e-8270-8c95-d7f4-be078a884a0a.png',
    'System integration':                  '4fb7210e-8270-8c95-d7f4-be078a884a0a.png',
    'Platforms connected':                 'b1b31fc4-f14c-250e-e261-380e18d161cc.png',
    'Analytics dashboard':                 'a988d29d-b4c8-716a-f5d0-c812aeaacc96.png',
    'Unified analytics dashboard':         'a988d29d-b4c8-716a-f5d0-c812aeaacc96.png',
    'Systems running automatically':       '8f7a8192-4b42-c763-b02e-7971adad762c.png',
    'Automated workflow':                  'e8567e85-b915-1865-114c-7a3f34223c58.png',
    'Business plan from real data':        '4ed21037-71a3-adf7-7cee-ac32da9c5651.png',
    'Financial projections and pitch deck':'8a123afd-d0f0-5f29-7d5d-2476f55df31e.png',
}

CARD_RE = re.compile(
    r'(<div style="background:#111111[^"]*"[^>]*>)\s*'
    r'(<img\s[^>]*?src=")(https?://[^"]+)("[^>]*>)\s*'
    r'(<p[^>]*>)(.*?)(</p>)\s*'
    r'(</div>)',
    re.DOTALL
)

def apply_to_file(fname):
    txt = open(fname).read()
    changes = 0
    log = []

    def replacer(m):
        nonlocal changes
        caption = m.group(6).strip()
        if caption in MASTER:
            new_src = CDN + MASTER[caption]
            old_src = m.group(3)
            if old_src != new_src:
                changes += 1
                log.append(f'    [{caption}]: .../{old_src.split("/")[-1]} → .../{MASTER[caption]}')
                return (m.group(1) + '\n    ' +
                        m.group(2) + new_src + m.group(4) + '\n    ' +
                        m.group(5) + caption + m.group(7) + '\n  ' +
                        m.group(8))
        return m.group(0)

    new_txt = CARD_RE.sub(replacer, txt)
    if changes:
        open(fname, 'w').write(new_txt)
        print(f'  {fname}: {changes} change(s)')
        for l in log:
            print(l)
    else:
        print(f'  {fname}: already correct')
    return changes

FILES = [
    'index.html',
    'projects.html',
    'services/ai-chatbots.html',
    'services/ai-content.html',
    'services/ai-strategy.html',
    'services/ai-business-planning.html',
    'services/brand-digital-presence.html',
    'services/custom-ai-tools.html',
    'services/ecommerce.html',
    'services/lead-generation.html',
    'services/reporting-analytics.html',
    'services/system-integration.html',
    'services/website-design.html',
    'services/workflow-automation.html',
]

print('=== Applying master image map ===')
total = 0
for f in FILES:
    total += apply_to_file(f)
print(f'\nTotal changes: {total}')

# ── Print final listings ───────────────────────────────────────────────────
GALLERY_SELECTORS = {
    'index.html':                          ('home-examples-grid', 6),
    'projects.html':                       ('projects-gallery-grid', 20),
    'services/ai-chatbots.html':           ('examples-grid', 10),
    'services/ai-content.html':            ('examples-grid', 10),
    'services/ai-strategy.html':           ('examples-grid', 10),
    'services/ai-business-planning.html':  ('examples-grid', 10),
    'services/brand-digital-presence.html':('examples-grid', 10),
    'services/custom-ai-tools.html':       ('examples-grid', 10),
    'services/ecommerce.html':             ('examples-grid', 10),
    'services/lead-generation.html':       ('examples-grid', 10),
    'services/reporting-analytics.html':   ('examples-grid', 10),
    'services/system-integration.html':    ('examples-grid', 10),
    'services/website-design.html':        ('examples-grid', 10),
    'services/workflow-automation.html':   ('examples-grid', 10),
}

print('\n\n=== FINAL caption→image pairings ===')
for fname, (grid_class, limit) in GALLERY_SELECTORS.items():
    txt = open(fname).read()
    start = txt.find(grid_class)
    if start == -1:
        print(f'\n{fname}: (no gallery found)')
        continue
    block = txt[start:start+60000]
    pairs = re.findall(
        r'src="(https://mcusercontent\.com/[^"]+)"[^>]*>\s*<p[^>]*>(.*?)</p>',
        block, re.DOTALL
    )[:limit]
    if not pairs:
        print(f'\n{fname}: (no cards found)')
        continue
    print(f'\n{fname}:')
    for i, (url, cap) in enumerate(pairs, 1):
        print(f'  {i:2}. "{cap}" → .../{url.split("/")[-1]}')
