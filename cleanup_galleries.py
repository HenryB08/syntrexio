#!/usr/bin/env python3
"""Remove orphaned duplicate cards and fix two caption swaps."""
import re

# ── index.html ──────────────────────────────────────────────────────────────
txt = open('index.html').read()

# The correct grid ends with "Coffee brand packaging</p>\n  </div>\n</div>"
# Then immediately after come the 5 stray cards (different indentation: 8 spaces)
# They end just before the "See what we build" button div
GRID_END_MARKER = 'Coffee brand packaging</p>\n  </div>\n</div>'
BUTTON_MARKER = '\n    <div style="text-align:center;">'

grid_end_pos = txt.find(GRID_END_MARKER)
assert grid_end_pos != -1, 'Could not find grid end marker in index.html'
after_grid = grid_end_pos + len(GRID_END_MARKER)

button_pos = txt.find(BUTTON_MARKER, after_grid)
assert button_pos != -1, 'Could not find button marker in index.html'

orphan_block = txt[after_grid:button_pos]
print(f'index.html: removing {len(orphan_block)} chars of orphaned cards')
print(f'  Orphan starts: {repr(orphan_block[:60])}')
print(f'  Orphan ends:   {repr(orphan_block[-60:])}')

txt = txt[:after_grid] + txt[button_pos:]
open('index.html', 'w').write(txt)
print('  index.html saved.')

# ── projects.html ────────────────────────────────────────────────────────────
txt = open('projects.html').read()

# The correct grid ends with "Analytics dashboard</p>\n  </div>\n</div>"
# Then orphaned cards follow (8-space indentation) until "      </div>\n    </div>"
# which closes the .con > section wrapper
PROJ_GRID_END = 'Analytics dashboard</p>\n  </div>\n</div>'
# The orphans end at the closing of the con div, just before </section>
# Find the pattern: orphan cards are 8-space indented cards, the section wrapper close follows
# After the orphans: '\n      </div>\n    </div>\n  '  then </section>
PROJ_AFTER_ORPHANS = '\n      </div>\n    </div>\n  </section>'

proj_grid_end_pos = txt.find(PROJ_GRID_END, txt.find('projects-gallery-grid'))
assert proj_grid_end_pos != -1, 'Could not find proj grid end marker'
after_proj_grid = proj_grid_end_pos + len(PROJ_GRID_END)

after_orphans_pos = txt.find(PROJ_AFTER_ORPHANS, after_proj_grid)
assert after_orphans_pos != -1, 'Could not find end of orphan block in projects.html'

orphan_block2 = txt[after_proj_grid:after_orphans_pos]
print(f'\nprojects.html: removing {len(orphan_block2)} chars of orphaned cards')
print(f'  Orphan starts: {repr(orphan_block2[:60])}')
print(f'  Orphan ends:   {repr(orphan_block2[-60:])}')

# Also need to remove the stray closing </div>\n      </div> that wraps the orphan set
# The orphan block includes cards + a closing </div></div> for the old grid
# Stitch: keep PROJ_GRID_END, then skip orphan block, then keep PROJ_AFTER_ORPHANS
txt = txt[:after_proj_grid] + txt[after_orphans_pos:]
open('projects.html', 'w').write(txt)
print('  projects.html saved (orphans removed).')

# ── Fix caption swaps on projects.html ──────────────────────────────────────
txt = open('projects.html').read()

# Image 2dca36b8 (VITAE pill bottle) should be "Supplement brand"
# Image 181156f9 (leather duffel) should be "Leather goods brand"
# Current state: they may be swapped — check and correct

# Strategy: find each image by its src hash, then fix the <p> caption that follows it
import re

def fix_caption(content, img_hash, correct_caption):
    # Find the card containing this image hash
    pattern = re.compile(
        r'(<img[^>]+' + re.escape(img_hash) + r'[^>]*>)\s*'
        r'(<p[^>]*>)(.*?)(</p>)',
        re.DOTALL
    )
    def replacer(m):
        current = m.group(3)
        if current == correct_caption:
            return m.group(0)  # already correct
        print(f'  {img_hash}: "{current}" → "{correct_caption}"')
        return m.group(1) + '\n    ' + m.group(2) + correct_caption + m.group(4)
    return pattern.sub(replacer, content)

txt = fix_caption(txt, '2dca36b8', 'Supplement brand')
txt = fix_caption(txt, '181156f9', 'Leather goods brand')

open('projects.html', 'w').write(txt)
print('\nprojects.html captions fixed.')

print('\nDone.')
