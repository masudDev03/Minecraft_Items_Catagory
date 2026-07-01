// This file contains the raw data for the categories and items.
// The icon strings should match the filenames of the images you place in the assets/images/ directory.
// For items, the render script will attempt to load an image based on the item name 
// (e.g., "Diamond Sword" -> "assets/images/diamond_sword.png").
// If an image is missing, the alt text will be displayed.

const categories = [
  {
    name: "Ores & Raw Materials", 
    icon: "iron_pickaxe.png",
    items: ["Coal", "Iron Ore", "Copper Ore", "Gold Ore", "Redstone Ore", "Lapis Ore", "Diamond Ore", "Emerald Ore", "Nether Quartz Ore", "Nether Gold Ore", "Ancient Debris", "Raw Iron", "Raw Copper", "Raw Gold", "Coal Ore", "Deepslate Iron Ore", "Deepslate Gold Ore", "Deepslate Diamond Ore"]
  },
  {
    name: "Ingots & Gems", 
    icon: "diamond.png",
    items: ["Iron Ingot", "Gold Ingot", "Copper Ingot", "Netherite Ingot", "Netherite Scrap", "Diamond", "Emerald", "Lapis Lazuli", "Redstone Dust", "Quartz", "Amethyst Shard", "Prismarine Shard", "Prismarine Crystal", "Nether Brick"]
  },
  {
    name: "Weapons & Tools", 
    icon: "diamond_sword.png",
    items: ["Wooden Sword", "Stone Sword", "Iron Sword", "Gold Sword", "Diamond Sword", "Netherite Sword", "Wooden Pickaxe", "Stone Pickaxe", "Iron Pickaxe", "Gold Pickaxe", "Diamond Pickaxe", "Netherite Pickaxe", "Axe (all tiers)", "Shovel (all tiers)", "Hoe (all tiers)", "Bow", "Crossbow", "Trident", "Fishing Rod", "Flint & Steel", "Shears", "Shield", "Arrow", "Spectral Arrow", "Tipped Arrow"]
  },
  {
    name: "Armor", 
    icon: "iron_chestplate.png",
    items: ["Leather Helmet", "Iron Helmet", "Gold Helmet", "Diamond Helmet", "Netherite Helmet", "Chainmail Helmet", "Leather Chestplate", "Iron Chestplate", "Diamond Chestplate", "Netherite Chestplate", "Leggings (all tiers)", "Boots (all tiers)", "Turtle Shell", "Elytra"]
  },
  {
    name: "Building Blocks", 
    icon: "bricks.png",
    items: ["Stone", "Cobblestone", "Granite", "Diorite", "Andesite", "Deepslate", "Calcite", "Tuff", "Obsidian", "Netherrack", "Basalt", "Blackstone", "End Stone", "Purpur Block", "Terracotta", "Glazed Terracotta", "Concrete", "Concrete Powder", "Bricks", "Stone Bricks", "Mossy Stone Bricks", "Sandstone", "Red Sandstone", "Quartz Block", "Prismarine", "Nether Bricks", "Mud Bricks"]
  },
  {
    name: "Wood & Planks", 
    icon: "oak_log.png",
    items: ["Oak Log", "Spruce Log", "Birch Log", "Jungle Log", "Acacia Log", "Dark Oak Log", "Mangrove Log", "Cherry Log", "Crimson Stem", "Warped Stem", "Oak Planks", "Spruce Planks", "Birch Planks", "Jungle Planks", "Acacia Planks", "Dark Oak Planks", "Mangrove Planks", "Cherry Planks", "Stripped Logs (all)", "Oak Wood", "Bamboo Block"]
  },
  {
    name: "Food & Crops", 
    icon: "apple.png",
    items: ["Apple", "Golden Apple", "Enchanted Golden Apple", "Bread", "Carrot", "Golden Carrot", "Potato", "Baked Potato", "Poisonous Potato", "Wheat", "Pumpkin", "Melon", "Melon Slice", "Beetroot", "Beetroot Soup", "Mushroom Stew", "Rabbit Stew", "Suspicious Stew", "Cooked Beef", "Raw Beef", "Cooked Chicken", "Raw Chicken", "Cooked Pork", "Raw Pork", "Cooked Fish", "Raw Cod", "Salmon", "Tropical Fish", "Pufferfish", "Cookie", "Cake", "Pumpkin Pie", "Honey Bottle", "Dried Kelp", "Sweet Berries", "Glow Berries", "Chorus Fruit"]
  },
  {
    name: "Seeds & Farming", 
    icon: "wheat_seeds.png",
    items: ["Wheat Seeds", "Pumpkin Seeds", "Melon Seeds", "Beetroot Seeds", "Torchflower Seeds", "Pitcher Pod", "Nether Wart", "Kelp", "Sea Pickle", "Cactus", "Sugar Cane", "Bamboo", "Cocoa Beans", "Lily Pad", "Spore Blossom", "Glow Lichen"]
  },
  {
    name: "Mob Drops", 
    icon: "bone.png",
    items: ["Bone", "Bone Meal", "String", "Spider Eye", "Fermented Spider Eye", "Gunpowder", "Slimeball", "Blaze Rod", "Blaze Powder", "Ghast Tear", "Magma Cream", "Ender Pearl", "Eye of Ender", "Shulker Shell", "Phantom Membrane", "Rabbit Hide", "Rabbit Foot", "Feather", "Leather", "Ink Sac", "Glow Ink Sac", "Rotten Flesh", "Zombie Brain", "Wither Rose", "Nether Star", "Dragon Egg", "Dragon's Breath", "Totem of Undying", "Nautilus Shell", "Heart of the Sea", "Scute"]
  },
  {
    name: "Potions & Brewing", 
    icon: "potion.png",
    items: ["Water Bottle", "Awkward Potion", "Mundane Potion", "Thick Potion", "Potion of Healing", "Potion of Regeneration", "Potion of Strength", "Potion of Swiftness", "Potion of Fire Resistance", "Potion of Night Vision", "Potion of Invisibility", "Potion of Water Breathing", "Potion of Leaping", "Potion of Slowness", "Potion of Weakness", "Potion of Harming", "Potion of Poison", "Potion of Slow Falling", "Splash Potions (all)", "Lingering Potions (all)", "Fermented Spider Eye", "Nether Wart", "Blaze Powder", "Glowstone Dust", "Redstone Dust", "Dragon's Breath", "Gunpowder"]
  },
  {
    name: "Redstone & Mechanisms", 
    icon: "redstone_dust.png",
    items: ["Redstone Dust", "Redstone Torch", "Redstone Block", "Lever", "Button (all types)", "Pressure Plate (all types)", "Observer", "Piston", "Sticky Piston", "Slime Block", "Honey Block", "Dropper", "Dispenser", "Hopper", "Comparator", "Repeater", "Tripwire Hook", "String", "Daylight Detector", "Target Block", "Detector Rail", "Activator Rail", "Powered Rail", "Rail", "TNT", "Sculk Sensor", "Calibrated Sculk Sensor"]
  },
  {
    name: "Enchanting & XP", 
    icon: "enchanted_book.png",
    items: ["Enchanting Table", "Bookshelf", "Anvil", "Grindstone", "Book", "Book and Quill", "Written Book", "Name Tag", "Enchanted Book", "Lapis Lazuli", "Experience Bottle (Bottle o' Enchanting)"]
  },
  {
    name: "Decorations", 
    icon: "painting.png",
    items: ["Painting", "Item Frame", "Glow Item Frame", "Flower Pot", "Banner (all colors)", "Banner Patterns", "Armor Stand", "Lantern", "Soul Lantern", "Candle (all colors)", "Torch", "Soul Torch", "Campfire", "Soul Campfire", "Jack o'Lantern", "Beacon", "End Rod", "Sea Lantern", "Shroomlight", "Glowstone", "Froglight (all 3)", "Amethyst Cluster", "Bamboo Mosaic", "Pink Petals"]
  },
  {
    name: "Plants & Nature", 
    icon: "oak_sapling.png",
    items: ["Oak Sapling", "Spruce Sapling", "Birch Sapling", "Jungle Sapling", "Acacia Sapling", "Dark Oak Sapling", "Mangrove Propagule", "Cherry Sapling", "Azalea", "Flowering Azalea", "Sunflower", "Rose Bush", "Lilac", "Peony", "Dandelion", "Poppy", "Blue Orchid", "Allium", "Oxeye Daisy", "Cornflower", "Lily of the Valley", "Wither Rose", "Tall Grass", "Fern", "Dead Bush", "Moss Block", "Grass Block", "Podzol", "Mycelium", "Rooted Dirt", "Mud"]
  },
  {
    name: "Storage & Utility", 
    icon: "chest.png",
    items: ["Chest", "Trapped Chest", "Barrel", "Ender Chest", "Shulker Box (all colors)", "Bundle", "Furnace", "Blast Furnace", "Smoker", "Crafting Table", "Cartography Table", "Fletching Table", "Stonecutter", "Loom", "Smithing Table", "Grindstone", "Brewing Stand", "Cauldron", "Composter", "Beehive", "Bee Nest"]
  },
  {
    name: "Transportation", 
    icon: "minecart.png",
    items: ["Minecart", "Chest Minecart", "Hopper Minecart", "Furnace Minecart", "TNT Minecart", "Rail", "Powered Rail", "Detector Rail", "Activator Rail", "Boat (all wood types)", "Chest Boat (all types)", "Saddle", "Horse Armor (all tiers)", "Elytra", "Firework Rocket"]
  },
  {
    name: "Dyes & Colors", 
    icon: "red_dye.png",
    items: ["White Dye", "Light Gray Dye", "Gray Dye", "Black Dye", "Brown Dye", "Red Dye", "Orange Dye", "Yellow Dye", "Lime Dye", "Green Dye", "Cyan Dye", "Light Blue Dye", "Blue Dye", "Purple Dye", "Magenta Dye", "Pink Dye", "Ink Sac", "Glow Ink Sac", "Cocoa Beans", "Lapis Lazuli", "Bone Meal"]
  },
  {
    name: "Nether Items", 
    icon: "netherrack.png",
    items: ["Netherite Ingot", "Netherite Scrap", "Ancient Debris", "Blaze Rod", "Blaze Powder", "Ghast Tear", "Magma Cream", "Nether Brick", "Nether Quartz", "Nether Wart", "Glowstone Dust", "Glowstone", "Soul Sand", "Soul Soil", "Basalt", "Blackstone", "Crimson Nylium", "Warped Nylium", "Shroomlight", "Hoglin Hide", "Snout Banner Pattern", "Gold Nugget", "Piglin Banner Pattern"]
  },
  {
    name: "End Items", 
    icon: "ender_pearl.png",
    items: ["Ender Pearl", "Eye of Ender", "End Stone", "End Stone Brick", "Purpur Block", "End Rod", "Chorus Fruit", "Popped Chorus Fruit", "Dragon Egg", "Dragon's Breath", "Elytra", "Shulker Shell", "Shulker Box"]
  },
  {
    name: "Music & Records", 
    icon: "music_disc_13.png",
    items: ["Music Disc - 13", "Music Disc - Cat", "Music Disc - Blocks", "Music Disc - Chirp", "Music Disc - Far", "Music Disc - Mall", "Music Disc - Mellohi", "Music Disc - Stal", "Music Disc - Strad", "Music Disc - Ward", "Music Disc - 11", "Music Disc - Wait", "Music Disc - Otherside", "Music Disc - 5", "Music Disc - Pigstep", "Music Disc - Relic", "Goat Horn (all variants)", "Note Block"]
  }
];
