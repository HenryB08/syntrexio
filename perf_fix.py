#!/usr/bin/env python3
"""Performance pass: add missing width/height attrs, remove duplicate script."""
import re, glob

# Images missing w/h — map partial hash → (width, height)
# Based on context:
# - bg-img-wrap fills: 1440x900
# - aspect-ratio reveals: use ratio-appropriate dims
# - card-img: 800x600
# - avatar (65a7a290): CSS-sized 100%/100% in container, add 80x80
# - footer logo (001e76aa second instance): add 180x56 same as nav
# - team photos (about.html jpegs): 400x400
# - service page section images: 1440x900 or specific
WH_MAP = {
    # avatar — circle, parent controls size
    '65a7a290': ('80', '80'),
    # logo in footer (nav logo already has w/h)
    '001e76aa': ('180', '56'),
    # hero bg image
    'e200492d': ('1440', '900'),
    # index reveals/section images
    'ce4539d5': ('1200', '800'),
    '72964ebf': ('1440', '900'),
    'ab00e5d5': ('1600', '900'),   # aspect-ratio:16/9
    'eb2021e4': ('1200', '900'),   # aspect-ratio:4/3
    '65b272f0': ('900', '1200'),   # aspect-ratio:3/4
    '97b2887a': ('1440', '900'),
    '44118612': ('1440', '900'),
    # card-img (services grid on homepage)
    'fb6f42e6': ('800', '600'),
    '47b98426': ('800', '600'),
    'ccaeb82e': ('800', '600'),
    'd2735bcb': ('800', '600'),
    '32af4e17': ('800', '600'),
    '02f1392b': ('800', '600'),
    '54e5da0e': ('800', '600'),
    '748ff56c': ('800', '600'),
    '399f6c62': ('800', '600'),
    'e28b593b': ('800', '600'),
    '2e62d57f': ('800', '600'),
    '69d87af5': ('800', '600'),
    # about.html team photos
    'bb891a65': ('1200', '900'),
    '639e9a06': ('800', '900'),
    '5c25ddf5': ('400', '500'),
    '40b1c3a9': ('400', '500'),
    'd29abc32': ('400', '500'),
    'b6b1cc0d': ('400', '500'),
    # service page section/reveal images
    'daa6144c': ('1440', '900'),
    '353b47f9': ('1440', '900'),
    'd150987b': ('1440', '900'),
    '019dd721': ('1440', '900'),
    '01e1d0ae': ('1440', '900'),
    'c7cb8781': ('1440', '900'),
    'e8567e85': ('1440', '900'),   # actually in master map — workflow auto
}

def add_wh(img_tag, w, h):
    """Insert width="W" height="H" before the closing > of an img tag."""
    # Don't add if already present
    if 'width=' in img_tag and 'height=' in img_tag:
        return img_tag
    # Add before closing >
    if img_tag.endswith('/>'):
        return img_tag[:-2] + f' width="{w}" height="{h}"/>'
    return img_tag[:-1] + f' width="{w}" height="{h}">'

def process_file(fname):
    txt = open(fname).read()
    original = txt
    changes = []

    # 1. Add missing width/height by hash prefix
    def img_replacer(m):
        img = m.group(0)
        if 'width=' in img and 'height=' in img:
            return img
        # Find matching hash
        for prefix, (w, h) in WH_MAP.items():
            if prefix in img:
                new_img = add_wh(img, w, h)
                if new_img != img:
                    changes.append(f'  + w/h {w}x{h} on ...{prefix}...')
                return new_img
        return img

    txt = re.sub(r'<img\s[^>]+>', img_replacer, txt, flags=re.DOTALL)

    # 2. Remove duplicate email-decode script (keep first, remove extra)
    script_pat = re.compile(
        r'\s*<script[^>]+email-decode\.min\.js[^>]*></script>',
        re.DOTALL
    )
    matches = list(script_pat.finditer(txt))
    if len(matches) > 1:
        # Remove all but first, working backwards
        for m in reversed(matches[1:]):
            txt = txt[:m.start()] + txt[m.end():]
            changes.append('  - removed duplicate email-decode script')

    if txt != original:
        open(fname, 'w').write(txt)
        print(f'{fname}: {len(changes)} change(s)')
        for c in changes:
            print(c)
    else:
        print(f'{fname}: no changes needed')


FILES = (
    ['index.html', 'projects.html', 'about.html'] +
    sorted(glob.glob('services/*.html'))
)

for f in FILES:
    process_file(f)

print('\nDone.')
