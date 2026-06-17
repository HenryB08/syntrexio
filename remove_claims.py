#!/usr/bin/env python3
"""Remove overreaching ownership/no-subscription claims sitewide. Log every change."""
import re, glob, os

changes_log = []

def edit(fname, old, new, note=''):
    global txt
    if old in txt:
        txt = txt.replace(old, new)
        changes_log.append((fname, note or old[:80], new[:80]))
        return True
    return False

def re_edit(fname, pattern, repl, note):
    global txt
    new_txt, n = re.subn(pattern, repl, txt)
    if n:
        txt = new_txt
        changes_log.append((fname, note, repl[:80]))
        return True
    return False

# Files to process (skip .BACKUP files)
all_files = (
    ['index.html', 'about.html', 'contact.html', 'pricing.html',
     'projects.html', 'services.html', 'legal.html', 'privacy.html', 'terms.html'] +
    sorted(glob.glob('services/*.html'))
)

for fname in all_files:
    if not os.path.exists(fname):
        continue
    txt = open(fname).read()
    original = txt

    # ── RECURRING PATTERNS (appear in every file's chatbot JS) ─────────────

    # chatbot `about:` — remove ", and you own it outright"
    edit(fname,
        'and you own it outright. We\'ve built',
        'We\'ve built',
        'chatbot about: removed ", and you own it outright"')

    # chatbot `services:` — remove ", and you own it when we hand it over"
    edit(fname,
        ', and you own it when we hand it over.',
        '.',
        'chatbot services: removed ", and you own it when we hand it over"')

    # chatbot `difference:` — remove "You own everything we build, no subscriptions, no monthly fees."
    edit(fname,
        'You own everything we build, no subscriptions, no monthly fees. ',
        '',
        'chatbot difference: removed ownership/no-subscription sentence')

    # FAQ block line — remove entire line
    edit(fname,
        '2. The client owns everything we build. No subscriptions, no monthly platform fees, no vendor lock-in.\n',
        '',
        'FAQ block: removed ownership/no-subscription line')

    # ── PAGE-SPECIFIC VISIBLE COPY ──────────────────────────────────────────

    if fname == 'index.html':
        # meta description
        edit(fname,
            'Every system built from scratch, you own it outright.',
            'Every system built from scratch.',
            'meta description: removed "you own it outright"')

        # structured data / chatbot FAQ text (appears twice with same wording)
        edit(fname,
            'Everything is built from scratch to match your business, and you own it outright. No templates, no subscriptions, no monthly fees.',
            'Everything is built from scratch to match your business.',
            'structured data: removed ownership/no-subscription clause')

        # visible paragraph under "What We Build" section
        edit(fname,
            '<p style="font-size:15px;line-height:1.7;color:#888888;">When we hand it over, it belongs to you. No monthly fees, no vendor lock-in. You pay once, you own it outright.</p>',
            '',
            'visible copy: removed entire ownership/no-fee paragraph')

        # chatbot FAQ answer about pricing (subscription tools comparison)
        edit(fname,
            'you own the system we build for your business. There are no recurring platform fees.',
            'it is built around how your business actually works.',
            'chatbot FAQ pricing: removed ownership/recurring fees claim')

    if fname == 'about.html':
        # page hero subtitle
        edit(fname,
            'Everything is built from scratch around your business, faster than a traditional agency, and you own it outright.',
            'Everything is built from scratch around your business, faster than a traditional agency.',
            'page hero: removed ", and you own it outright"')

        # lval card text
        edit(fname,
            'Built from scratch for your business. No templates, no subscriptions.',
            'Built from scratch for your business. No templates.',
            'lval card: removed "no subscriptions"')

    if fname == 'contact.html':
        # "Every Build" detail item
        edit(fname,
            'Custom from scratch, you own it outright',
            'Custom from scratch',
            'contact detail item: removed "you own it outright"')

    if fname == 'pricing.html':
        # meta description
        edit(fname,
            'No subscriptions, no fixed tiers, no hidden fees. You own everything we build.',
            'No fixed tiers, no hidden fees.',
            'meta description: removed "No subscriptions" and "You own everything we build"')

        # og:description and twitter:description (same string)
        edit(fname,
            'No subscriptions, no fixed tiers. Website, ecommerce, AI tools, automation, and more. You own everything we build.',
            'No fixed tiers. Website, ecommerce, AI tools, automation, and more.',
            'og/twitter meta: removed "No subscriptions" and "You own everything we build"')

        # page hero subtitle
        edit(fname,
            'No subscriptions, no hidden fees, and you own everything we build.',
            'No hidden fees.',
            'pricing hero: removed subscription and ownership claims')

    if fname == 'services.html':
        # page hero subtitle
        edit(fname,
            'Every project is built from scratch around your business, and you own it outright.',
            'Every project is built from scratch around your business.',
            'services hero: removed "and you own it outright"')

    if fname == 'services/ai-chatbots.html':
        # meta description
        edit(fname,
            'Built from scratch for your business. You own it outright.',
            'Built from scratch for your business.',
            'meta description: removed "You own it outright"')

    if fname == 'services/custom-ai-tools.html':
        # meta description
        edit(fname,
            'Custom built, you own it outright.',
            'Custom built.',
            'meta description: removed "you own it outright"')

        # visible body copy: "hand over full ownership. No recurring platform fees."
        edit(fname,
            'hand over full ownership. No recurring platform fees.',
            'hand it over.',
            'body copy: removed "full ownership" and "No recurring platform fees"')

    if fname == 'services/system-integration.html':
        # meta description
        edit(fname,
            'Custom built, no subscriptions.',
            'Custom built.',
            'meta description: removed "no subscriptions"')

    if fname == 'services/website-design.html':
        # visible body copy block — remove three sentences about ownership/no-subscription
        edit(fname,
            ' The site we build belongs to you. No monthly website builder subscription, no platform lock-in. You own the code, the design, and the hosting relationship.',
            '',
            'body copy: removed ownership/no-subscription sentences')

    if fname == 'terms.html':
        # legal copy — remove "outright" and the "No ongoing licenses..." sentence
        edit(fname,
            'you own all deliverables outright once the project is complete and final payment is made. No ongoing licenses, no subscriptions, no strings attached.',
            'deliverables are transferred to you once the project is complete and final payment is received.',
            'terms: removed "outright" and "No ongoing licenses, no subscriptions" clause')

    if txt != original:
        open(fname, 'w').write(txt)

# ── Print report ─────────────────────────────────────────────────────────────
print(f'\n{"="*70}')
print(f'CHANGES MADE: {len(changes_log)} edits across all files')
print(f'{"="*70}\n')

by_file = {}
for fname, old, new in changes_log:
    by_file.setdefault(fname, []).append((old, new))

for fname in all_files:
    if fname in by_file:
        print(f'\n── {fname} ──')
        for old, new in by_file[fname]:
            print(f'  BEFORE: {old}')
            print(f'  AFTER:  {new if new else "(removed)"}')
            print()
