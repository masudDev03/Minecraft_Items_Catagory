# Minecraft Item Category Browser — PRD

## Problem
The current tool is a single inline HTML snippet — useful for quickly looking up which category a Minecraft item belongs to (e.g. for sorting storage systems), but it's visually plain, has no real responsive behavior, and lives as one unstructured file. As a reference tool meant to be opened repeatedly while playing or organizing chests, it deserves to look good, work well on a phone screen (since you might check it while away from your PC), and be easy to extend with new items/categories later.

## Solution
Rebuild the same core functionality — search + category filter over a list of Minecraft items — as a clean, responsive, well-organized static site. Same data, same search/filter behavior, but a real visual identity (matching your programmer-core/minimal aesthetic) and a proper file structure that separates data, logic, and styling so it's easy to maintain or expand later.

## Scope
**In scope:**
- Search bar (live filter, matches item name or category name)
- Category tabs/pills (filter by one category or "All")
- Responsive grid of item cards, mobile → desktop breakpoints
- All 21 existing categories and their items, ported as-is
- Empty-state message when search has no matches
- Default light theme and toggle feature to dark with smooth day and night sky effect
- Clean separation: HTML structure / CSS / JS data / JS logic in separate files
- Avoid emojis, prefer to use standard icons and real minecraft objects/img where needed ( like catagories )
- Also add sound effects from minecraft

**Out of scope (v1):**
- Adding new items/categories beyond what's in the current data set
- Persisting user state (e.g. last active tab) across page reloads
- Backend, database, or build tooling (no React/bundler — plain HTML/CSS/JS only, per your ask)
- Multi-language support

## Technical Spec

**Architecture:**
Static site, no build step, no framework — plain HTML/CSS/JS loaded directly in the browser.
```
minecraft-item-browser/
├── index.html          # markup shell only: search bar, tabs container, content container
├── css/
│   └── styles.css       # all styling, CSS variables for theme, responsive breakpoints
├── js/
│   ├── data.js          # the categories array (data only, no logic)
│   ├── render.js         # functions: buildTabs(), renderGrid(), renderEmptyState()
│   └── app.js            # wires up state (activeTab, searchVal), event listeners, calls render
└── README.md             # brief usage note
```
`index.html` loads scripts in order: `data.js` → `render.js` → `app.js`. No modules/bundler needed since it's three small files loaded sequentially — keeps it copy-paste-runnable with zero setup.

**Data model:**
Single JS array in `data.js`, unchanged shape from the original:
```js
{
  name: string,       // category name, e.g. "Ores & Raw Materials"
  emoji: string,       // category icon, e.g. "⛏️"
  items: string[]       // flat list of item names in that category
}
```
No IDs needed — category `name` is used as the filter key, item strings are used directly as card content. This keeps it trivial to extend: adding a category or item is just editing the array.

**APIs / interfaces:**
No external APIs — fully client-side. Internal function contract (in `render.js`):
- `buildTabs(categories, onTabClick)` → renders tab pills, attaches click handlers
- `renderGrid(filteredCategories)` → renders the card grid + empty state into `#content`
- `filterCategories(categories, activeTab, searchVal)` → pure function, returns filtered data (in `app.js` or a small `filter.js` if it grows)

State lives in `app.js` as two variables (`activeTab`, `searchVal`), same pattern as the original — no need for a state library at this scale.

**Responsive behavior:**
- Grid: `repeat(auto-fill, minmax(160px, 1fr))` already adapts down to mobile; verify card padding/font sizes scale at <400px widths
- Tabs: wrap onto multiple lines on narrow screens (already `flex-wrap: wrap`), consider horizontal scroll-on-mobile as an alternative if wrapping looks cluttered with 21 categories
- Search bar: full-width on all breakpoints

## Success criteria
- Opens correctly as a static file (or via Vercel/Netlify) with zero console errors
- Search filters items in real time across all categories
- Tab filter and search compose correctly together (matches your original logic)
- Looks intentional and polished on mobile (375px), tablet, and desktop widths — not just "doesn't break"
- All three JS files and the CSS file are independently readable — no logic buried in `index.html`

## Open questions
- Visual direction: stick with your usual dark/cyan-accent aesthetic, or something more "Minecraft-flavored" (blocky, pixel-font touches)? Flag if you want a specific look — I'll default to your usual minimal dark theme otherwise.
- Deploy target: just a local file, or pushed to Vercel/Netlify like your other projects?
