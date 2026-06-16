#!/usr/bin/env python3
"""Fix truncated image hashes → full Mailchimp UUIDs across all gallery pages."""

import re
import os

BASE = '/home/user/syntrexio'
CDN = 'https://mcusercontent.com/d9f0645acdcd85eb1ee1a8067/images/'

# Full UUID map: short-hash → full UUID filename
UUID_MAP = {
    '6d99be78': '6d99be78-fe78-2331-3d37-4f87f4aa3da0',
    'd1770605': 'd1770605-bce7-342f-4932-7c32498c01af',
    '2efc8fd3': '2efc8fd3-581f-ea93-348c-187b801cc652',
    'dc764363': 'dc764363-e7f8-824e-5e42-e44458e71e77',
    'd9072ce0': 'd9072ce0-27eb-ee4e-baf7-c2dcf2ea68da',
    '87e42905': '87e42905-7457-9f7d-0871-072d11b7a212',
    '5cf20abe': '5cf20abe-e508-6cdd-af08-5a076d7ca693',
    'ce896686': 'ce896686-ecbd-d9f6-99c4-9a5fce61413a',
    '181156f9': '181156f9-c4f9-a6bc-5cb2-d49cb157e017',
    '8b689c3d': '8b689c3d-9321-4b4f-90cd-459a39cf47b9',
    '2dca36b8': '2dca36b8-b09e-1028-ba1c-4f2b036df828',
    '5583585e': '5583585e',  # needs lookup — not in pre-rebuild pages
    'e522233b': 'e522233b-3d79-ae4c-c9a5-de87f78ce5bf',
    '396de9b7': '396de9b7-9236-14cb-c610-a1e3b954eafc',
    'aeca10a5': 'aeca10a5-9f90-4da7-7e9b-61cd41f3a4f5',
    'f2e76f39': 'f2e76f39-2e82-668d-bd68-b8c4c70152bc',
    '08ac6099': '08ac6099-0d25-c660-0c61-7c8bf20bbe29',
    '4d840d94': '4d840d94-6028-b1ec-ce58-f00c425474b7',
    '4fb7210e': '4fb7210e-8270-8c95-d7f4-be078a884a0a',
    'a988d29d': 'a988d29d-b4c8-716a-f5d0-c812aeaacc96',
    # service-only
    '122f32b9': '122f32b9-20be-8bd8-5e00-e819550704c4',
    '6db75f94': '6db75f94-5d56-0c5b-5f9b-3cd06a3a0751',
    '9f1d375a': '9f1d375a-266c-8027-d4b3-bba386331f6d',
    '8f7a8192': '8f7a8192-4b42-c763-b02e-7971adad762c',
    'e8567e85': 'e8567e85-b915-1865-114c-7a3f34223c58',
    '55649e62': '55649e62-0a5c-bbd8-2f54-7ee905c49901',
    'b1b31fc4': 'b1b31fc4-f14c-250e-e261-380e18d161cc',
    '09f91ff8': '09f91ff8-86c5-3de6-fe4c-7c67542429ff',
    '4ed21037': '4ed21037-71a3-adf7-7cee-ac32da9c5651',
    '8a123afd': '8a123afd-d0f0-5f29-7d5d-2476f55df31e',
    '440a5439': '440a5439-0b40-c7f5-6bcb-fc9cad0be02f',
}

FILES = [
    'projects.html',
    'index.html',
    'services/website-design.html',
    'services/ai-chatbots.html',
    'services/lead-generation.html',
    'services/ecommerce.html',
    'services/workflow-automation.html',
    'services/custom-ai-tools.html',
    'services/system-integration.html',
    'services/ai-content.html',
    'services/reporting-analytics.html',
    'services/ai-business-planning.html',
    'services/brand-digital-presence.html',
]

def fix_file(rel_path):
    path = os.path.join(BASE, rel_path)
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    original = content

    # Replace each truncated URL with the full UUID version
    # Pattern: /images/XXXXXXXX.png  (8 hex chars, no dash)
    def replace_url(m):
        short = m.group(1)
        if short in UUID_MAP:
            full = UUID_MAP[short]
            return f'{CDN}{full}.png'
        return m.group(0)  # leave unchanged if not in map

    new_content = re.sub(
        CDN.replace('.', r'\.') + r'([0-9a-f]{8})\.png',
        replace_url,
        content
    )

    if new_content != original:
        with open(path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        # Report what was fixed
        fixed = re.findall(CDN.replace('.', r'\.') + r'([0-9a-f]{8}-[^"]+)', new_content)
        print(f'  FIXED {rel_path}: {len(fixed)} URLs corrected')
    else:
        print(f'  OK {rel_path}: no truncated URLs found')

def main():
    for f in FILES:
        fix_file(f)

    # Verify: print all gallery src URLs from projects.html
    print('\n--- Verification: projects.html gallery URLs ---')
    txt = open(os.path.join(BASE, 'projects.html')).read()
    start = txt.find('projects-gallery-grid')
    block = txt[start:start+40000]
    urls = re.findall(r'src="(https?://[^"]+)"', block)
    for u in urls:
        short = u.split('/')[-1].replace('.png','')[:8]
        ok = '-' in u.split('/')[-1]
        print(f'  {"✓" if ok else "✗"} {u}')

if __name__ == '__main__':
    main()
