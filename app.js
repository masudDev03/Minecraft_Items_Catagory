// Application State
let activeTab = "All";
let searchVal = "";

// DOM Elements
const searchEl = document.getElementById("search");
const themeToggleBtn = document.getElementById("theme-toggle");

// Initialize Application
function init() {
  // Setup theme listener
  themeToggleBtn.addEventListener("click", toggleTheme);
  
  // Check system preference or default to dark
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    // Uncomment next line if you want to default to light mode on light systems
    // document.body.className = 'theme-light';
  }

  // Setup search listener
  searchEl.addEventListener("input", (e) => {
    searchVal = e.target.value;
    if (searchVal) {
      // If typing in search, reset tab to All to search globally by default
      activeTab = "All";
    }
    update();
  });

  // Setup search enter sound
  searchEl.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      if (typeof playSound === 'function') {
        playSound('themeToggleandSearchEnter.ogg');
      }
    }
  });

  // Initial render
  update();
}

// Handle tab clicks
function handleTabClick(tabName) {
  activeTab = tabName;
  update();
}

// Handle theme toggling
function toggleTheme() {
  const isLight = document.body.classList.contains('theme-light');
  if (isLight) {
    document.body.classList.remove('theme-light');
    document.body.classList.add('theme-dark');
  } else {
    document.body.classList.remove('theme-dark');
    document.body.classList.add('theme-light');
  }
  
  // Play sound effect for theme toggle
  if (typeof playSound === 'function') {
    playSound('themeToggleandSearchEnter.ogg'); // Using orb sound as a toggle effect
  }
}

// Filter data and trigger render
function update() {
  const q = searchVal.toLowerCase();
  
  // Filter logic
  const filtered = categories
    .filter(cat => activeTab === "All" || cat.name === activeTab)
    .map(cat => ({
      ...cat,
      items: cat.items.filter(item => {
        if (!q) return true;
        // Match item name or category name
        return item.toLowerCase().includes(q) || cat.name.toLowerCase().includes(q);
      })
    }))
    .filter(cat => cat.items.length > 0);

  // Update UI
  buildTabs(categories, activeTab, handleTabClick);
  renderGrid(filtered, searchVal);
}

// Start app
document.addEventListener("DOMContentLoaded", init);
