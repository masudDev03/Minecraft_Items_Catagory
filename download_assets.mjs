import fs from 'fs';
import path from 'path';
import https from 'https';

const dirs = ['assets/images', 'assets/sounds'];
dirs.forEach(dir => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
});

const baseUrl = "https://raw.githubusercontent.com/PixiGeko/Minecraft-default-assets/master/assets/minecraft/textures/item/";

// Every item needed — category icons + item cards
// Filenames must match what the PixiGeko repo calls them (snake_case, no spaces)
const itemsToDownload = [
  // --- Category icons ---
  "iron_pickaxe", "diamond", "diamond_sword", "iron_chestplate", "bricks",
  "oak_log", "apple", "wheat_seeds", "bone", "potion", "redstone",
  "enchanted_book", "painting", "oak_sapling", "chest", "minecart",
  "red_dye", "netherrack", "ender_pearl", "music_disc_13",

  // --- Ores & Raw Materials ---
  "coal", "iron_ore", "copper_ore", "gold_ore", "redstone_ore", "lapis_ore",
  "diamond_ore", "emerald_ore", "nether_quartz_ore", "nether_gold_ore",
  "ancient_debris", "raw_iron", "raw_copper", "raw_gold",
  "deepslate_iron_ore", "deepslate_gold_ore", "deepslate_diamond_ore",

  // --- Ingots & Gems ---
  "iron_ingot", "gold_ingot", "copper_ingot", "netherite_ingot",
  "netherite_scrap", "emerald", "lapis_lazuli", "quartz",
  "amethyst_shard", "prismarine_shard", "prismarine_crystals", "nether_brick",

  // --- Weapons & Tools ---
  "wooden_sword", "stone_sword", "iron_sword", "golden_sword",
  "netherite_sword", "wooden_pickaxe", "stone_pickaxe", "iron_pickaxe",
  "golden_pickaxe", "diamond_pickaxe", "netherite_pickaxe",
  "wooden_axe", "stone_axe", "iron_axe", "diamond_axe", "netherite_axe",
  "wooden_shovel", "stone_shovel", "iron_shovel", "diamond_shovel", "netherite_shovel",
  "wooden_hoe", "stone_hoe", "iron_hoe", "diamond_hoe", "netherite_hoe",
  "bow", "crossbow", "trident", "fishing_rod", "flint_and_steel",
  "shears", "shield", "arrow", "spectral_arrow", "tipped_arrow",

  // --- Armor ---
  "leather_helmet", "iron_helmet", "golden_helmet", "diamond_helmet",
  "netherite_helmet", "chainmail_helmet",
  "leather_chestplate", "iron_chestplate", "diamond_chestplate", "netherite_chestplate",
  "leather_leggings", "iron_leggings", "diamond_leggings", "netherite_leggings",
  "leather_boots", "iron_boots", "diamond_boots", "netherite_boots",
  "turtle_helmet", "elytra",

  // --- Building Blocks ---
  "stone", "cobblestone", "granite", "diorite", "andesite", "deepslate",
  "calcite", "tuff", "obsidian", "netherrack", "basalt", "blackstone",
  "end_stone", "purpur_block", "terracotta", "white_glazed_terracotta",
  "white_concrete", "white_concrete_powder",
  "stone_bricks", "mossy_stone_bricks", "sandstone", "red_sandstone",
  "quartz_block", "prismarine", "nether_bricks", "mud_bricks",

  // --- Wood & Planks ---
  "spruce_log", "birch_log", "jungle_log", "acacia_log",
  "dark_oak_log", "mangrove_log", "cherry_log",
  "crimson_stem", "warped_stem",
  "oak_planks", "spruce_planks", "birch_planks", "jungle_planks",
  "acacia_planks", "dark_oak_planks", "mangrove_planks", "cherry_planks",
  "bamboo_block",

  // --- Food & Crops ---
  "golden_apple", "enchanted_golden_apple", "bread", "carrot", "golden_carrot",
  "potato", "baked_potato", "poisonous_potato", "wheat",
  "pumpkin", "melon", "melon_slice",
  "beetroot", "beetroot_soup", "mushroom_stew", "rabbit_stew", "suspicious_stew",
  "cooked_beef", "beef", "cooked_chicken", "chicken",
  "cooked_porkchop", "porkchop", "cooked_cod", "cod", "salmon",
  "tropical_fish", "pufferfish", "cookie", "cake", "pumpkin_pie",
  "honey_bottle", "dried_kelp", "sweet_berries", "glow_berries", "chorus_fruit",

  // --- Seeds & Farming ---
  "pumpkin_seeds", "melon_seeds", "beetroot_seeds",
  "torchflower_seeds", "pitcher_pod", "nether_wart",
  "kelp", "sea_pickle", "cactus", "sugar_cane", "bamboo",
  "cocoa_beans", "lily_pad", "spore_blossom", "glow_lichen",

  // --- Mob Drops ---
  "bone_meal", "string", "spider_eye", "fermented_spider_eye",
  "gunpowder", "slime_ball", "blaze_rod", "blaze_powder", "ghast_tear",
  "magma_cream", "eye_of_ender", "shulker_shell", "phantom_membrane",
  "rabbit_hide", "rabbit_foot", "feather", "leather",
  "ink_sac", "glow_ink_sac", "rotten_flesh",
  "wither_rose", "nether_star", "dragon_egg",
  "dragons_breath", "totem_of_undying", "nautilus_shell",
  "heart_of_the_sea", "scute",

  // --- Potions & Brewing ---
  "potion", "splash_potion", "lingering_potion",
  "brewing_stand", "glowstone_dust",

  // --- Redstone & Mechanisms ---
  "redstone_torch", "redstone_block", "lever", "stone_button",
  "oak_pressure_plate", "observer", "piston", "sticky_piston",
  "slime_block", "honey_block", "dropper", "dispenser", "hopper",
  "comparator", "repeater", "tripwire_hook",
  "daylight_detector", "target",
  "detector_rail", "activator_rail", "powered_rail", "rail",
  "tnt", "sculk_sensor", "calibrated_sculk_sensor",

  // --- Enchanting & XP ---
  "enchanting_table", "bookshelf", "anvil", "grindstone",
  "book", "writable_book", "written_book", "name_tag",
  "experience_bottle",

  // --- Decorations ---
  "item_frame", "glow_item_frame", "flower_pot",
  "white_banner", "armor_stand", "lantern", "soul_lantern",
  "white_candle", "torch", "soul_torch", "campfire", "soul_campfire",
  "jack_o_lantern", "beacon", "end_rod", "sea_lantern",
  "shroomlight", "glowstone", "ochre_froglight",
  "amethyst_cluster", "bamboo_mosaic", "pink_petals",

  // --- Plants & Nature ---
  "spruce_sapling", "birch_sapling", "jungle_sapling",
  "acacia_sapling", "dark_oak_sapling", "mangrove_propagule", "cherry_sapling",
  "azalea", "flowering_azalea",
  "sunflower", "rose_bush", "lilac", "peony",
  "dandelion", "poppy", "blue_orchid", "allium", "oxeye_daisy",
  "cornflower", "lily_of_the_valley",
  "short_grass", "fern", "dead_bush",
  "moss_block", "grass_block", "podzol", "mycelium",
  "rooted_dirt", "mud",

  // --- Storage & Utility ---
  "trapped_chest", "barrel", "ender_chest",
  "white_shulker_box", "bundle", "furnace", "blast_furnace",
  "smoker", "crafting_table", "cartography_table", "fletching_table",
  "stonecutter", "loom", "smithing_table",
  "brewing_stand", "cauldron", "composter", "beehive", "bee_nest",

  // --- Transportation ---
  "chest_minecart", "hopper_minecart", "furnace_minecart", "tnt_minecart",
  "oak_boat", "oak_chest_boat", "saddle",
  "leather_horse_armor", "iron_horse_armor", "golden_horse_armor", "diamond_horse_armor",
  "firework_rocket",

  // --- Dyes & Colors ---
  "white_dye", "light_gray_dye", "gray_dye", "black_dye", "brown_dye",
  "orange_dye", "yellow_dye", "lime_dye", "green_dye",
  "cyan_dye", "light_blue_dye", "blue_dye", "purple_dye",
  "magenta_dye", "pink_dye", "bone_meal",

  // --- Nether Items ---
  "soul_sand", "soul_soil",
  "crimson_nylium", "warped_nylium",
  "gold_nugget", "nether_quartz",

  // --- End Items ---
  "end_stone_bricks", "end_rod",
  "popped_chorus_fruit", "shulker_box",

  // --- Music & Records ---
  "music_disc_cat", "music_disc_blocks", "music_disc_chirp",
  "music_disc_far", "music_disc_mall", "music_disc_mellohi",
  "music_disc_stal", "music_disc_strad", "music_disc_ward",
  "music_disc_11", "music_disc_wait", "music_disc_otherside",
  "music_disc_5", "music_disc_pigstep", "music_disc_relic",
  "goat_horn", "note_block",
];

// Deduplicate
const uniqueItems = [...new Set(itemsToDownload)];

function download(url, dest) {
  return new Promise((resolve) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => file.close(resolve));
      } else {
        file.close();
        fs.unlink(dest, () => {});
        resolve(false);
      }
    }).on('error', () => {
      fs.unlink(dest, () => {});
      resolve(false);
    });
  });
}

async function run() {
  let downloaded = 0;
  let skipped = 0;

  console.log(`Downloading ${uniqueItems.length} icons...`);

  for (const item of uniqueItems) {
    const filename = `${item}.png`;
    const dest = path.join('assets/images', filename);

    // Skip if already downloaded
    if (fs.existsSync(dest) && fs.statSync(dest).size > 0) {
      skipped++;
      continue;
    }

    const url = `${baseUrl}${filename}`;
    const result = await download(url, dest);
    if (result !== false) {
      downloaded++;
      console.log(`  ✓ ${filename}`);
    } else {
      console.log(`  ✗ Not found: ${filename}`);
    }
  }

  console.log(`\nDone! Downloaded: ${downloaded}, Skipped (already exist): ${skipped}`);
}

run();
