# 🗃️ Minecraft Item Category Browser

> **A fast, polished reference tool** — search and filter every Minecraft item by storage category, so you always know which chest it belongs in.

Built with **zero dependencies**: plain HTML, CSS, and JavaScript. No build step. No framework. Just open it and go.

---

## ✨ Features

- **Live search** — type anything and results filter in real time across all categories and item names
- **21 category tabs** — browse by category (Ores, Armor, Food, Redstone, and more)
- **Day / Night theme toggle** — animated sky background that smoothly transitions between light and dark mode with a Minecraft sound effect
- **Minecraft sound effects** — satisfying audio feedback on clicks, tab switches, and theme changes
- **Item icons** — real Minecraft sprite images on every card with graceful fallback if an image is missing
- **Responsive layout** — works cleanly on mobile (375px), tablet, and desktop
- **Zero setup** — static site, no server or build tool required

---

## 📁 File Structure

```
minecraft-item-browser/
├── index.html              # Markup shell: header, search bar, tabs, content area
├── css/
│   └── styles.css          # All styling, CSS variables for theming, sky animations, responsive grid
├── js/
│   ├── data.js             # Category & item data (edit here to add/remove items)
│   ├── render.js           # DOM functions: buildTabs(), renderGrid(), playSound()
│   └── app.js              # State (activeTab, searchVal), event listeners, filter logic
├── assets/
│   ├── images/             # Item & category icon PNGs
│   ├── sounds/             # Minecraft .ogg sound effect files
│   └── bg/                 # Background assets
├── download_assets.mjs     # Optional script to auto-download item sprites
└── README.md
```

Scripts are loaded in order — `data.js` → `render.js` → `app.js` — with no module bundler required.

---

## 🚀 Getting Started

Since this is a fully static site, there is **no install or build step**.

1. **Clone or download** this repository
2. **Open `index.html`** in any modern browser

That's it. It runs straight from the filesystem.

---

## 🖼️ Adding Assets

The app is designed to use real Minecraft sprites and sounds. Place your files in the `assets/` directory as described below.

> **Tip:** Use the included `download_assets.mjs` script to automatically download item images.

### Sounds

Place `.ogg` (or `.mp3`) files in `assets/sounds/`:

| File | Used when |
|---|---|
| `click.ogg` | Clicking item cards or category tabs |
| `chest_open.ogg` | Switching to a different category tab |
| `themeToggleandSearchEnter.ogg` | Toggling the theme or pressing Enter in search |

### Images — Category Icons

Place `.png` files in `assets/images/`. The filename must match the `icon` field defined for each category in `js/data.js`:

```js
{ name: "Ores & Raw Materials", icon: "iron_pickaxe.png", items: [...] }
```

### Images — Item Cards

The app automatically derives an image path from each item's name:

1. Strips parenthetical suffixes — `"Axe (all tiers)"` → `"Axe"`
2. Lowercases and replaces spaces with underscores
3. Appends `.png`

**Examples:**

| Item Name | Expected File |
|---|---|
| `Diamond Sword` | `assets/images/diamond_sword.png` |
| `Oak Sapling` | `assets/images/oak_sapling.png` |
| `Raw Iron` | `assets/images/raw_iron.png` |
| `Axe (all tiers)` | `assets/images/axe.png` |

If an image file is missing, the card silently hides the broken image and shows the item name as text — no errors, no layout shifts.

---

## 🗂️ Adding or Editing Categories

All data lives in [`js/data.js`](js/data.js) as a single array. Each entry follows this shape:

```js
{
  name: "Category Name",   // Used as the tab label and filter key
  icon: "filename.png",    // Matches a file in assets/images/
  items: [                 // Flat list of item name strings
    "Item One",
    "Item Two",
  ]
}
```

To add a new category, append an object to the array. To add items to an existing category, add strings to its `items` array. No other files need to change.

---

## 🎨 Theming

The UI ships with a **dark mode default** and a **light mode** toggle. The animated sky background (sun, moon, stars) transitions smoothly between states using CSS classes:

| Class on `<body>` | Theme |
|---|---|
| `theme-dark` | Night sky — dark background, stars visible |
| `theme-light` | Day sky — light background, sun visible |

CSS variables in `styles.css` control all colors. Override them to restyle the whole app.

---

## 🔍 How Search & Filter Works

State is managed in `app.js` with two variables:

```js
let activeTab = "All";  // Currently selected category tab
let searchVal = "";     // Current search input value
```

On every change, `update()` runs a pure filter over the `categories` array:
- If a tab is selected, only that category's items are shown
- If a search term is present, items are matched against both the item name **and** the category name
- Typing in the search bar automatically resets the active tab to `"All"` so results span all categories

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Structure | HTML5 |
| Styling | Vanilla CSS (custom properties, CSS Grid, `@keyframes`) |
| Logic | Vanilla JavaScript (ES6+) |
| Fonts | [Inter](https://fonts.google.com/specimen/Inter) via Google Fonts |
| Assets | Minecraft item sprites & sound effects |

No build tools, no package manager, no runtime dependencies.

---

## 📄 License

This is a personal reference project. Minecraft item names, textures, and sounds are property of **Mojang Studios / Microsoft**.
