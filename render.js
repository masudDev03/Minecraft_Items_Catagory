// Utility to play sounds if they exist
const audioCache = {};
function playSound(soundFile) {
  if (!audioCache[soundFile]) {
    audioCache[soundFile] = new Audio(`assets/sounds/${soundFile}`);
    // Optional: adjust volume
    audioCache[soundFile].volume = 1;
  }
  // Clone node to allow overlapping sounds
  const soundClone = audioCache[soundFile].cloneNode();
  soundClone.volume = 1;
  soundClone.play().catch(e => {
    // Ignore errors for missing files or autoplay blocks
    console.debug(`Sound not played: ${soundFile}`, e);
  });
}

function getItemImageName(itemName) {
  // Strip out parenthetical text, lowercase, replace spaces with underscores
  // e.g., "Wooden Pickaxe (all tiers)" -> "wooden_pickaxe"
  let cleanName = itemName.split('(')[0].trim();
  return cleanName.toLowerCase().replace(/ /g, '_').replace(/'/g, '') + '.png';
}

function buildTabs(categories, activeTab, onTabClick) {
  const tabsContainer = document.getElementById("tabs");
  tabsContainer.innerHTML = '';

  // "All" tab
  const allBtn = document.createElement("button");
  allBtn.className = `tab ${activeTab === "All" ? "active" : ""}`;
  allBtn.innerHTML = `<span>All</span>`;
  allBtn.onclick = () => {
    playSound('minecraft_click.ogg');
    onTabClick("All");
  };
  tabsContainer.appendChild(allBtn);

  // Category tabs
  categories.forEach(cat => {
    const btn = document.createElement("button");
    btn.className = `tab ${activeTab === cat.name ? "active" : ""}`;
    
    // Add image icon if icon field is present
    const imgHtml = cat.icon ? `<img src="assets/images/${cat.icon}" class="tab-icon" alt="${cat.name}" onerror="this.style.display='none'">` : '';
    
    btn.innerHTML = `${imgHtml} <span>${cat.name}</span>`;
    btn.onclick = () => {
      playSound('minecraft_click.ogg');
      onTabClick(cat.name);
    };
    tabsContainer.appendChild(btn);
  });
}

function renderGrid(filteredCategories, searchVal) {
  const contentContainer = document.getElementById("content");
  let html = "";

  if (filteredCategories.length === 0) {
    contentContainer.innerHTML = `<p class="empty">No items found for "<strong>${searchVal}</strong>"</p>`;
    return;
  }

  filteredCategories.forEach(cat => {
    const catIconHtml = cat.icon ? `<img src="assets/images/${cat.icon}" class="cat-header-icon" alt="">` : '';
    html += `<div class="cat-header">${catIconHtml} ${cat.name} <span class="count-badge">${cat.items.length}</span></div>`;
    html += `<div class="grid">`;
    
    cat.items.forEach(item => {
      const itemImgName = getItemImageName(item);
      html += `
        <div class="card" onclick="playSound('minecraft_click.ogg')">
          <img src="assets/images/${itemImgName}" class="card-icon" alt="" onerror="this.onerror=null; this.style.opacity='0.1';">
          <div class="card-name">${item}</div>
          <div class="card-cat">${cat.name}</div>
        </div>
      `;
    });
    
    html += `</div>`;
  });

  contentContainer.innerHTML = html;
}
