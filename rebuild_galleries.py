#!/usr/bin/env python3
"""Rebuild all example galleries with exact ordered image specs."""

import re
import os

BASE = '/home/user/syntrexio'
CDN = 'https://mcusercontent.com/d9f0645acdcd85eb1ee1a8067/images/'

def img_url(hash_):
    return f'{CDN}{hash_}.png'

def card(hash_, caption):
    url = img_url(hash_)
    return f'''<div style="background:#111111;border:1px solid #222222;border-radius:16px;overflow:hidden;">
    <img src="{url}" alt="{caption}" width="800" height="520" loading="lazy" decoding="async" style="width:100%;height:280px;object-fit:cover;display:block;border-radius:16px 16px 0 0;">
    <p style="padding:14px 20px;font-size:13px;color:#888888;margin:0;line-height:1.5;">{caption}</p>
  </div>'''

# ── specs ─────────────────────────────────────────────────────────────────────

PROJECTS = [
    ('6d99be78', 'Restaurant brand site'),
    ('d1770605', 'Insurance company site'),
    ('2efc8fd3', 'Real estate platform'),
    ('dc764363', 'Brand identity system'),
    ('d9072ce0', 'Branded packaging'),
    ('87e42905', 'Skincare product line'),
    ('5cf20abe', 'Product photography'),
    ('ce896686', 'Apparel brand'),
    ('181156f9', 'Leather goods brand'),
    ('8b689c3d', 'Coffee brand packaging'),
    ('2dca36b8', 'Supplement brand'),
    ('5583585e', 'Candle brand'),
    ('e522233b', 'Branded social content'),
    ('396de9b7', 'Lead generation system'),
    ('aeca10a5', 'Automated follow-up sequence'),
    ('f2e76f39', 'AI booking assistant'),
    ('08ac6099', 'Ecommerce store'),
    ('4d840d94', 'Custom business tool'),
    ('4fb7210e', 'System integration'),
    ('a988d29d', 'Analytics dashboard'),
]

HOME = [
    ('6d99be78', 'Restaurant brand site'),
    ('dc764363', 'Brand identity system'),
    ('5cf20abe', 'Product photography'),
    ('ce896686', 'Apparel brand'),
    ('396de9b7', 'Lead generation system'),
    ('8b689c3d', 'Coffee brand packaging'),
]

SERVICES = {
    'services/website-design.html': [
        ('6d99be78', 'Restaurant brand site'),
        ('2efc8fd3', 'Real estate platform'),
        ('d1770605', 'Insurance company site'),
    ],
    'services/ai-chatbots.html': [
        ('f2e76f39', 'AI booking assistant'),
        ('122f32b9', 'Chat assistant handling questions'),
    ],
    'services/lead-generation.html': [
        ('396de9b7', 'Lead pipeline'),
        ('aeca10a5', 'Automated follow-up sequence'),
    ],
    'services/ecommerce.html': [
        ('08ac6099', 'Ecommerce store'),
        ('6db75f94', 'Checkout flow'),
        ('ce896686', 'Apparel brand'),
        ('9f1d375a', 'Apparel product imagery'),
        ('181156f9', 'Leather goods brand'),
    ],
    'services/workflow-automation.html': [
        ('8f7a8192', 'Systems running automatically'),
        ('e8567e85', 'Automated workflow'),
    ],
    'services/custom-ai-tools.html': [
        ('4d840d94', 'Custom proposal generator'),
        ('55649e62', 'Custom quote-builder'),
    ],
    'services/system-integration.html': [
        ('4fb7210e', 'Data synced across devices'),
        ('b1b31fc4', 'Platforms connected'),
    ],
    'services/ai-content.html': [
        ('5cf20abe', 'Product photography'),
        ('e522233b', 'Branded social content'),
        ('09f91ff8', 'Skincare product line'),
    ],
    'services/reporting-analytics.html': [
        ('a988d29d', 'Analytics dashboard'),
    ],
    'services/ai-business-planning.html': [
        ('4ed21037', 'Business plan from real data'),
        ('8a123afd', 'Financial projections and pitch deck'),
    ],
    'services/brand-digital-presence.html': [
        ('dc764363', 'Brand identity system'),
        ('d9072ce0', 'Branded packaging'),
        ('440a5439', 'Brand collateral set'),
    ],
}

# ── helpers ───────────────────────────────────────────────────────────────────

def build_cards(spec):
    return '\n  '.join(card(h, c) for h, c in spec)


def replace_grid_content(content, grid_class, new_cards):
    """Replace everything inside the first div with grid_class."""
    pattern = re.compile(
        r'(<div[^>]+class="[^"]*' + re.escape(grid_class) + r'[^"]*"[^>]*>)'
        r'(.*?)'
        r'(</div>)',
        re.DOTALL
    )
    def replacer(m):
        return m.group(1) + '\n  ' + new_cards + '\n' + m.group(3)
    new_content, count = pattern.subn(replacer, content, count=1)
    return new_content, count


def replace_examples_section_grid(content, new_cards):
    """Replace the examples-grid content inside #examples-section."""
    pattern = re.compile(
        r'(id="examples-section".*?<div[^>]+class="[^"]*examples-grid[^"]*"[^>]*>)'
        r'(.*?)'
        r'(</div>\s*</div>\s*</section>)',
        re.DOTALL
    )
    def replacer(m):
        return m.group(1) + '\n  ' + new_cards + '\n' + m.group(3)
    new_content, count = pattern.subn(replacer, content, count=1)
    return new_content, count


# ── per-file processors ───────────────────────────────────────────────────────

def process_projects():
    path = os.path.join(BASE, 'projects.html')
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    new_cards = build_cards(PROJECTS)
    new_content, count = replace_grid_content(content, 'projects-gallery-grid', new_cards)
    if count:
        with open(path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f'projects.html: replaced grid ({len(PROJECTS)} cards)')
    else:
        print('projects.html: NO MATCH — check grid class')


def process_home():
    path = os.path.join(BASE, 'index.html')
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    new_cards = build_cards(HOME)
    new_content, count = replace_grid_content(content, 'home-examples-grid', new_cards)
    if count:
        with open(path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f'index.html: replaced grid ({len(HOME)} cards)')
    else:
        print('index.html: NO MATCH — check grid class')


def process_service(rel_path, spec):
    path = os.path.join(BASE, rel_path)
    if not os.path.exists(path):
        print(f'{rel_path}: NOT FOUND')
        return
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    new_cards = build_cards(spec)
    new_content, count = replace_examples_section_grid(content, new_cards)
    if count:
        with open(path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f'{rel_path}: replaced ({len(spec)} cards)')
    else:
        print(f'{rel_path}: NO MATCH — trying fallback')
        # Fallback: match examples-grid directly
        new_content2, count2 = replace_grid_content(content, 'examples-grid', new_cards)
        if count2:
            with open(path, 'w', encoding='utf-8') as f:
                f.write(new_content2)
            print(f'{rel_path}: replaced via fallback ({len(spec)} cards)')
        else:
            print(f'{rel_path}: FAILED')


def main():
    process_projects()
    process_home()
    for rel_path, spec in SERVICES.items():
        process_service(rel_path, spec)
    print('\nDone!')


if __name__ == '__main__':
    main()
