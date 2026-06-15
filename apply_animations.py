#!/usr/bin/env python3
"""Apply sitewide animations to all HTML files."""

import re
import os

BASE = '/home/user/syntrexio/.claude/worktrees/agent-add856eda1710ba05'

HTML_FILES = [
    'index.html', 'about.html', 'services.html', 'pricing.html',
    'projects.html', 'contact.html', 'privacy.html', 'terms.html',
    'legal.html', 'case-study.html',
    'services/ai-chatbots.html', 'services/ai-content.html',
    'services/ai-strategy.html', 'services/ai-business-planning.html',
    'services/brand-digital-presence.html', 'services/custom-ai-tools.html',
    'services/ecommerce.html', 'services/lead-generation.html',
    'services/reporting-analytics.html', 'services/system-integration.html',
    'services/website-design.html', 'services/workflow-automation.html',
]

PAGE_TRANSITION_DIV = '<div id="page-transition" style="position:fixed;top:0;left:0;width:100%;height:100%;background:#000;z-index:99999;opacity:0;pointer-events:none;transition:opacity 0.3s ease;"></div>'

PAGE_TRANSITION_JS = """<script>
/* Page transition fade */
(function(){
  var overlay = document.getElementById('page-transition');
  if(!overlay) return;
  overlay.style.opacity = '1';
  overlay.style.pointerEvents = 'none';
  requestAnimationFrame(function(){
    requestAnimationFrame(function(){
      overlay.style.opacity = '0';
    });
  });
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(reduced) return;
  document.addEventListener('click', function(e){
    var a = e.target.closest('a');
    if(!a) return;
    var href = a.getAttribute('href');
    if(!href || href.startsWith('#') || href.startsWith('mailto') || href.startsWith('tel') || a.target === '_blank') return;
    if(href.startsWith('http') && !href.includes('syntrexio.com')) return;
    e.preventDefault();
    overlay.style.pointerEvents = 'all';
    overlay.style.opacity = '1';
    setTimeout(function(){ window.location.href = href; }, 300);
  });
})();
</script>"""

IMAGE_REVEAL_JS = """<script>
/* Image clip-in reveal */
(function(){
  var imgRevealEls = document.querySelectorAll('[data-reveal="image"]');
  if(!imgRevealEls.length) return;
  var imgIO = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(e.isIntersecting){
        e.target.classList.add('revealed');
        imgIO.unobserve(e.target);
      }
    });
  }, {threshold: 0.1});
  imgRevealEls.forEach(function(el){ imgIO.observe(el); });
})();
</script>"""

FULL_ANIMATIONS_JS = """<script>
/* Page transition fade */
(function(){
  var overlay = document.getElementById('page-transition');
  if(!overlay) return;
  overlay.style.opacity = '1';
  overlay.style.pointerEvents = 'none';
  requestAnimationFrame(function(){
    requestAnimationFrame(function(){
      overlay.style.opacity = '0';
    });
  });
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(reduced) return;
  document.addEventListener('click', function(e){
    var a = e.target.closest('a');
    if(!a) return;
    var href = a.getAttribute('href');
    if(!href || href.startsWith('#') || href.startsWith('mailto') || href.startsWith('tel') || a.target === '_blank') return;
    if(href.startsWith('http') && !href.includes('syntrexio.com')) return;
    e.preventDefault();
    overlay.style.pointerEvents = 'all';
    overlay.style.opacity = '1';
    setTimeout(function(){ window.location.href = href; }, 300);
  });
})();
</script>
<script>
(function(){
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Text reveal */
  if(!reduced){
    var headings = document.querySelectorAll('h1, h2');
    headings.forEach(function(h){
      if(h.closest('.card') || h.dataset.lineRevealed) return;
      h.dataset.lineRevealed = '1';
      var html = h.innerHTML;
      h.innerHTML = '<span class="reveal-text"><span class="reveal-line" style="display:block;transform:translateY(110%);transition:transform 0.85s cubic-bezier(0.16,1,0.3,1);">' + html + '</span></span>';
      h.style.overflow = 'hidden';
    });
    var textIO = new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if(e.isIntersecting){
          var line = e.target.querySelector('.reveal-line');
          if(line) line.style.transform = 'translateY(0)';
          textIO.unobserve(e.target);
        }
      });
    }, {threshold: 0.15});
    document.querySelectorAll('h1[data-line-revealed], h2[data-line-revealed]').forEach(function(h){
      textIO.observe(h);
    });
  }

  /* Image clip-in reveal */
  var imgRevealEls = document.querySelectorAll('[data-reveal="image"]');
  if(imgRevealEls.length){
    var imgIO = new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if(e.isIntersecting){
          e.target.classList.add('revealed');
          imgIO.unobserve(e.target);
        }
      });
    }, {threshold: 0.1});
    imgRevealEls.forEach(function(el){ imgIO.observe(el); });
  }

  /* Card zoom on scroll */
  if(!reduced){
    var cardImgs = document.querySelectorAll('.card-img');
    cardImgs.forEach(function(ci){
      var img = ci.querySelector('img');
      if(!img) return;
      img.style.transition = 'transform 1.2s cubic-bezier(0.16,1,0.3,1)';
      img.style.transform = 'scale(1.05)';
    });
    var cardIO = new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if(e.isIntersecting){
          var img = e.target.querySelector('img');
          if(img) img.style.transform = 'scale(1.0)';
          cardIO.unobserve(e.target);
        }
      });
    }, {threshold: 0.2});
    cardImgs.forEach(function(ci){ cardIO.observe(ci); });
  }

  /* data-reveal fade-up */
  if(!document.querySelector('[data-reveal-observer]')){
    var els = document.querySelectorAll('[data-reveal]:not([data-reveal="image"])');
    if(els.length){
      var io = new IntersectionObserver(function(entries){
        entries.forEach(function(e){
          if(e.isIntersecting){
            e.target.classList.add('revealed');
            io.unobserve(e.target);
          }
        });
      }, {threshold: 0.1});
      els.forEach(function(el){ io.observe(el); });
    }
  }
})();
</script>"""


def is_card_class(class_val):
    """Return True if this class attribute represents a top-level card element.
    Must have 'card' as a standalone word, not as prefix like card-img."""
    classes = class_val.split()
    return 'card' in classes


def process_file(filepath):
    if not os.path.exists(filepath):
        print(f'  SKIP (not found): {filepath}')
        return

    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    original = content
    fname = os.path.basename(filepath)
    is_index = fname == 'index.html'

    # A. Add page-transition div after <body> tag
    if 'id="page-transition"' not in content:
        content = re.sub(
            r'(<body[^>]*>)',
            r'\1\n' + PAGE_TRANSITION_DIV,
            content,
            count=1
        )
        print(f'  + Added page-transition div')

    # B. Add img-section class to sections/divs with class "sp" or "process" that contain bg-img-wrap
    pattern = r'<(?:section|div)\s[^>]*class="[^"]*(?:\bsp\b|\bprocess\b)[^"]*"[^>]*>'

    new_content_parts = []
    last_end = 0
    for m in re.finditer(pattern, content):
        tag = m.group(0)
        start = m.end()
        snippet = content[start:start+5000]
        if 'bg-img-wrap' in snippet and 'img-section' not in tag:
            new_tag = re.sub(r'(class=")', r'\1img-section ', tag, count=1)
            new_content_parts.append(content[last_end:m.start()] + new_tag)
            last_end = m.end()

    if new_content_parts:
        content = ''.join(new_content_parts) + content[last_end:]
        print(f'  + Added img-section classes')

    # C. Add data-reveal="image" to .img-side and .img-reveal divs
    def add_data_reveal_image(m):
        tag = m.group(0)
        if 'data-reveal' in tag:
            return tag
        return tag[:-1] + ' data-reveal="image">'

    new_content = re.sub(
        r'<div\s+(?:[^>]*?\s+)?class="[^"]*\bimg-(?:side|reveal)\b[^"]*"[^>]*>',
        add_data_reveal_image,
        content
    )
    if new_content != content:
        print(f'  + Added data-reveal="image" attributes')
        content = new_content

    # D. Add data-delay cycling to consecutive .card elements (top-level cards only)
    # Match <a class="card..." or <div class="card..." where card is a standalone class word
    # Pattern: opening tag where class contains exactly 'card' as a space-separated word
    card_pattern = re.compile(
        r'(<(?:a|div)\s+(?:[^>]*?\s+)?class="((?:[^"]*\s)?card(?:\s[^"]*)?)"(?:\s+[^>]*)?)(/?>|>)'
    )

    def class_has_standalone_card(class_val):
        return 'card' in class_val.split()

    matches = [(m, class_has_standalone_card(m.group(2))) for m in card_pattern.finditer(content)]
    matches = [m for m, ok in matches if ok]

    if matches:
        groups = []
        current_group = [matches[0]]
        for i in range(1, len(matches)):
            gap = matches[i].start() - matches[i-1].end()
            if gap < 1000:
                current_group.append(matches[i])
            else:
                groups.append(current_group)
                current_group = [matches[i]]
        groups.append(current_group)

        replacements = {}
        for group in groups:
            for idx, m in enumerate(group):
                tag = m.group(0)
                if 'data-delay' not in tag:
                    delay = idx % 4
                    new_tag = m.group(1) + f' data-delay="{delay}"' + m.group(3)
                    replacements[m.start()] = (m.end(), new_tag)

        if replacements:
            parts = []
            last = 0
            for pos in sorted(replacements.keys()):
                end, new_tag = replacements[pos]
                parts.append(content[last:pos])
                parts.append(new_tag)
                last = end
            parts.append(content[last:])
            content = ''.join(parts)
            print(f'  + Added data-delay attributes to cards')

    # E. Add JS before </body>
    has_reveal_line = 'reveal-line' in content
    has_page_transition_js = 'Page transition fade' in content

    if is_index:
        if not has_page_transition_js:
            insert_js = PAGE_TRANSITION_JS + '\n' + IMAGE_REVEAL_JS
            content = content.replace('</body>', insert_js + '\n</body>', 1)
            print(f'  + Added page-transition + image reveal JS (index)')
    else:
        if not has_reveal_line and not has_page_transition_js:
            content = content.replace('</body>', FULL_ANIMATIONS_JS + '\n</body>', 1)
            print(f'  + Added full animations JS')
        elif has_page_transition_js:
            print(f'  ~ JS already present, skipping')

    if content != original:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f'  Saved: {filepath}')
    else:
        print(f'  No changes needed: {filepath}')


def main():
    for rel_path in HTML_FILES:
        filepath = os.path.join(BASE, rel_path)
        print(f'\nProcessing: {rel_path}')
        process_file(filepath)
    print('\nDone!')


if __name__ == '__main__':
    main()
