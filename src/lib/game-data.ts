// Central data file for the whole site. Every figure here is pulled from the
// actual Trash Collector Game (README, source comments, and in-game values) so
// the marketing site never drifts from what the game really does.

import logo from "@/assets/game/logo.png";
import logo256 from "@/assets/game/logo_256.png";
import coin from "@/assets/game/coin.png";
import bin from "@/assets/game/bin.png";
import bgMountains from "@/assets/game/bg_mountains.png";
import bgHill from "@/assets/game/bg_hill.png";
import bgCloud from "@/assets/game/bg_cloud.png";
import bgCloudB from "@/assets/game/bg_cloud_b.png";
import tileGrass from "@/assets/game/tile_grass.png";
import tileDirt from "@/assets/game/tile_dirt.png";
import tilePlatform from "@/assets/game/tile_platform.png";
import tileBoundary from "@/assets/game/tile_boundary.png";

import c1 from "@/assets/game/characters/c1_face.png";
import c2 from "@/assets/game/characters/c2_face.png";
import c3 from "@/assets/game/characters/c3_face.png";
import c4 from "@/assets/game/characters/c4_face.png";
import c5 from "@/assets/game/characters/c5_face.png";
import c6 from "@/assets/game/characters/c6_face.png";
import c7 from "@/assets/game/characters/c7_face.png";
import c8 from "@/assets/game/characters/c8_face.png";
import c9 from "@/assets/game/characters/c9_face.png";
import c10 from "@/assets/game/characters/c10_face.png";
import c11 from "@/assets/game/characters/c11_face.png";
import c12 from "@/assets/game/characters/c12_face.png";
import c13 from "@/assets/game/characters/c13_face.png";
import c14 from "@/assets/game/characters/c14_face.png";
import c15 from "@/assets/game/characters/c15_face.png";
import c16 from "@/assets/game/characters/c16_face.png";

import tBottle from "@/assets/game/trash/trash_bottle.png";
import tCan from "@/assets/game/trash/trash_can.png";
import tPaper from "@/assets/game/trash/trash_paper.png";
import tBanana from "@/assets/game/trash/trash_banana.png";
import tBag from "@/assets/game/trash/trash_bag.png";
import tGlass from "@/assets/game/trash/trash_glass.png";
import tCup from "@/assets/game/trash/trash_cup.png";
import tApple from "@/assets/game/trash/trash_apple.png";
import tGolden from "@/assets/game/trash/trash_golden.png";

import keyA from "@/assets/game/keys/a.png";
import keyD from "@/assets/game/keys/d.png";
import keyW from "@/assets/game/keys/w.png";
import keyS from "@/assets/game/keys/s.png";
import keyE from "@/assets/game/keys/e.png";
import keyP from "@/assets/game/keys/p.png";
import keyEsc from "@/assets/game/keys/esc.png";

// Per-biome layered scenery, used to build a live parallax preview instead of
// a single flat screenshot — every biome tab on /maps is a real rendered scene.
import greenMountains from "@/assets/game/biomes/greenland/mountains_far.png";
import greenHill from "@/assets/game/biomes/greenland/hill.png";
import greenGrass from "@/assets/game/biomes/greenland/tile_grass.png";
import greenDirt from "@/assets/game/biomes/greenland/tile_dirt.png";
import greenCloud from "@/assets/game/biomes/greenland/cloud.png";
import greenCloudB from "@/assets/game/biomes/greenland/cloud_b.png";

import desertMountains from "@/assets/game/biomes/desert/mountains_far.png";
import desertHill from "@/assets/game/biomes/desert/hill.png";
import desertGrass from "@/assets/game/biomes/desert/tile_grass.png";
import desertDirt from "@/assets/game/biomes/desert/tile_dirt.png";
import desertCloud from "@/assets/game/biomes/desert/cloud.png";
import desertCloudB from "@/assets/game/biomes/desert/cloud_b.png";

import snowMountains from "@/assets/game/biomes/snow/mountains_far.png";
import snowHill from "@/assets/game/biomes/snow/hill.png";
import snowGrass from "@/assets/game/biomes/snow/tile_grass.png";
import snowDirt from "@/assets/game/biomes/snow/tile_dirt.png";
import snowCloud from "@/assets/game/biomes/snow/cloud.png";
import snowCloudB from "@/assets/game/biomes/snow/cloud_b.png";

import jungleMountains from "@/assets/game/biomes/jungle/mountains_far.png";
import jungleHill from "@/assets/game/biomes/jungle/hill.png";
import jungleGrass from "@/assets/game/biomes/jungle/tile_grass.png";
import jungleDirt from "@/assets/game/biomes/jungle/tile_dirt.png";
import jungleCloud from "@/assets/game/biomes/jungle/cloud.png";
import jungleCloudB from "@/assets/game/biomes/jungle/cloud_b.png";

import safariMountains from "@/assets/game/biomes/safari/mountains_far.png";
import safariHill from "@/assets/game/biomes/safari/hill.png";
import safariGrass from "@/assets/game/biomes/safari/tile_grass.png";
import safariDirt from "@/assets/game/biomes/safari/tile_dirt.png";
import safariCloud from "@/assets/game/biomes/safari/cloud.png";
import safariCloudB from "@/assets/game/biomes/safari/cloud_b.png";

// Controller button icon sets — Xbox and PlayStation face/stick/trigger art,
// used by the controller-support showcase on /controls.
import xSouth from "@/assets/game/controller/xbox/south.png";
import xEast from "@/assets/game/controller/xbox/east.png";
import xWest from "@/assets/game/controller/xbox/west.png";
import xNorth from "@/assets/game/controller/xbox/north.png";
import xDpad from "@/assets/game/controller/xbox/dpad.png";
import xLb from "@/assets/game/controller/xbox/lb.png";
import xRb from "@/assets/game/controller/xbox/rb.png";
import xLt from "@/assets/game/controller/xbox/lt.png";
import xRt from "@/assets/game/controller/xbox/rt.png";
import xStart from "@/assets/game/controller/xbox/start.png";
import xBack from "@/assets/game/controller/xbox/back.png";
import xLstick from "@/assets/game/controller/xbox/lstick.png";
import xRstick from "@/assets/game/controller/xbox/rstick.png";

import pSouth from "@/assets/game/controller/ps/south.png";
import pEast from "@/assets/game/controller/ps/east.png";
import pWest from "@/assets/game/controller/ps/west.png";
import pNorth from "@/assets/game/controller/ps/north.png";
import pDpad from "@/assets/game/controller/ps/dpad.png";
import pLb from "@/assets/game/controller/ps/lb.png";
import pRb from "@/assets/game/controller/ps/rb.png";
import pLt from "@/assets/game/controller/ps/lt.png";
import pRt from "@/assets/game/controller/ps/rt.png";
import pStart from "@/assets/game/controller/ps/start.png";
import pBack from "@/assets/game/controller/ps/back.png";
import pLstick from "@/assets/game/controller/ps/lstick.png";
import pRstick from "@/assets/game/controller/ps/rstick.png";

export const GAME = {
  name: "Trash Collector Game",
  tagline: "2D pixel platformer built purely with Java",
  // Follows the latest entry in `changelog` below — update together when adding a new release.
  version: "2.3.0",
  java: "Java 17",
  buildTool: "Gradle",
  // Current official distribution: portable .zip (jpackage app-image) for Windows, no installer.
  platforms: "Windows",
  resolution: "16:9",
};

export const art = {
  logo,
  /** High-resolution 256×256 icon — master source from `logo`, used for large displays such as the hero /trash. */
  logoLarge: logo256,
  coin,
  bin,
  mountains: bgMountains,
  hill: bgHill,
  cloud: bgCloud,
  cloudB: bgCloudB,
  grass: tileGrass,
  dirt: tileDirt,
  platform: tilePlatform,
  boundary: tileBoundary,
};

export type Character = {
  id: string;
  name: string;
  price: number;
  face: string;
  color: string;
};

export const characters: Character[] = [
  { id: "c1", name: "Melow", price: 0, face: c1, color: "#E8E8E8" },
  { id: "c2", name: "Angry", price: 200, face: c2, color: "#E23B3B" },
  { id: "c3", name: "Naughty", price: 200, face: c3, color: "#3A3A3A" },
  { id: "c4", name: "Ninja", price: 350, face: c4, color: "#262626" },
  { id: "c5", name: "Kind", price: 350, face: c5, color: "#454545" },
  { id: "c6", name: "Calm Blue", price: 500, face: c6, color: "#1E5FCB" },
  { id: "c7", name: "Mime", price: 500, face: c7, color: "#2E2E2E" },
  { id: "c8", name: "Silat", price: 750, face: c8, color: "#7A1414" },
  { id: "c9", name: "Blind", price: 750, face: c9, color: "#3D6A1E" },
  { id: "c10", name: "Drunk", price: 1000, face: c10, color: "#6A1E8F" },
  { id: "c11", name: "Joker", price: 1000, face: c11, color: "#1F7A4C" },
  { id: "c12", name: "Spider Weaver", price: 1300, face: c12, color: "#C22222" },
  { id: "c13", name: "Bald Man", price: 1300, face: c13, color: "#C98A55" },
  { id: "c14", name: "Dead Swim", price: 1600, face: c14, color: "#A51A1A" },
  { id: "c15", name: "Savior", price: 1600, face: c15, color: "#5A5A5A" },
  { id: "c16", name: "Spider Black", price: 2000, face: c16, color: "#232323" },
];

export const trashTypes = [
  { name: "Bottle", src: tBottle },
  { name: "Can", src: tCan },
  { name: "Paper", src: tPaper },
  { name: "Banana", src: tBanana },
  { name: "Bag", src: tBag },
  { name: "Glass", src: tGlass },
  { name: "Cup", src: tCup },
  { name: "Apple", src: tApple },
];

export const goldenTrash = { name: "Golden Trash", src: tGolden };

export type TrashCategory = "organic" | "inorganic";

export type TrashItem = {
  id: string;
  name: string;
  src: string;
  category: TrashCategory;
};

/**
 * Full version of `trashTypes` for the gallery page (/trash): each sprite
 * is paired with a category and a short explanation, so the photos have
 * clear context instead of just a small icon in a badge.
 */
export const trashGallery: TrashItem[] = [
  {
    id: "botol",
    name: "Plastic Bottle",
    src: tBottle,
    category: "inorganic"
  },
  {
    id: "kaleng",
    name: "Can",
    src: tCan,
    category: "inorganic",
  },
  {
    id: "kertas",
    name: "Paper / Cardboard",
    src: tPaper,
    category: "inorganic",
  },
  {
    id: "pisang",
    name: "Banana Peel",
    src: tBanana,
    category: "organic",
  },
  {
    id: "kantong",
    name: "Plastic Bag",
    src: tBag,
    category: "inorganic",
  },
  {
    id: "kaca",
    name: "Glass Bottle",
    src: tGlass,
    category: "inorganic",
  },
  {
    id: "gelas",
    name: "Disposable Cup",
    src: tCup,
    category: "inorganic",
  },
  {
    id: "apel",
    name: "Apple Core",
    src: tApple,
    category: "organic",
  },
];

/** Summary of trash count per category, used for the filter tabs on the gallery page. */
export const trashCategoryCounts = trashGallery.reduce(
  (acc, t) => {
    acc[t.category] += 1;
    return acc;
  },
  { organic: 0, inorganic: 0 } as Record<TrashCategory, number>,
);

export type MapTheme = {
  id: string;
  index: number;
  name: string;
  desc: string;
  tone: string;
  scene: { mountains: string; hill: string; grass: string; dirt: string; cloud: string; cloudB: string };
};

export const maps: MapTheme[] = [
  {
    id: "green",
    index: 0,
    name: "Green Land",
    desc: "A lush green grassland, perfect for beginners.",
    tone: "#56A73A",
    scene: { mountains: greenMountains, hill: greenHill, grass: greenGrass, dirt: greenDirt, cloud: greenCloud, cloudB: greenCloudB },
  },
  {
    id: "desert",
    index: 1,
    name: "Desert",
    desc: "A vast sand desert with golden dunes and scorching hot air.",
    tone: "#DEAA5A",
    scene: { mountains: desertMountains, hill: desertHill, grass: desertGrass, dirt: desertDirt, cloud: desertCloud, cloudB: desertCloudB },
  },
  {
    id: "snow",
    index: 2,
    name: "Snow",
    desc: "A cold, glittering snowy plain, with icy mountains in the distance.",
    tone: "#B9DEEE",
    scene: { mountains: snowMountains, hill: snowHill, grass: snowGrass, dirt: snowDirt, cloud: snowCloud, cloudB: snowCloudB },
  },
  {
    id: "jungle",
    index: 3,
    name: "Jungle",
    desc: "A dense tropical jungle with a thick green canopy and fertile ground.",
    tone: "#3A8C36",
    scene: { mountains: jungleMountains, hill: jungleHill, grass: jungleGrass, dirt: jungleDirt, cloud: jungleCloud, cloudB: jungleCloudB },
  },
  {
    id: "safari",
    index: 4,
    name: "Safari",
    desc: "A vast dry savanna with golden grassland and acacia trees.",
    tone: "#C89646",
    scene: { mountains: safariMountains, hill: safariHill, grass: safariGrass, dirt: safariDirt, cloud: safariCloud, cloudB: safariCloudB },
  },
];

export const controls = [
  { action: "Move Left", key: keyA, label: "A" },
  { action: "Move Right", key: keyD, label: "D" },
  { action: "Jump", key: keyW, label: "W" },
  { action: "Drop Through Platform", key: keyS, label: "S" },
  { action: "Collect Trash", key: keyE, label: "E" },
  { action: "Pause", key: keyP, label: "P" },
  { action: "Back", key: keyEsc, label: "Esc" },
];

/** Xbox and PlayStation button icon sets, keyed the same way so the UI can flip between them. */
export const controllerIcons = {
  xbox: {
    south: xSouth,
    east: xEast,
    west: xWest,
    north: xNorth,
    dpad: xDpad,
    lb: xLb,
    rb: xRb,
    lt: xLt,
    rt: xRt,
    start: xStart,
    back: xBack,
    lstick: xLstick,
    rstick: xRstick,
  },
  ps: {
    south: pSouth,
    east: pEast,
    west: pWest,
    north: pNorth,
    dpad: pDpad,
    lb: pLb,
    rb: pRb,
    lt: pLt,
    rt: pRt,
    start: pStart,
    back: pBack,
    lstick: pLstick,
    rstick: pRstick,
  },
};

/** Actions bound to each face button, mirroring the in-game default controller bindings. */
export const controllerBindings = [
  { icon: "south" as const, label: "A / Cross", action: "Jump" },
  { icon: "west" as const, label: "X / Square", action: "Collect trash" },
  { icon: "east" as const, label: "B / Circle", action: "Back / Cancel" },
  { icon: "north" as const, label: "Y / Triangle", action: "Open pause menu" },
  { icon: "dpad" as const, label: "D-Pad", action: "Navigate menu" },
  { icon: "lstick" as const, label: "Left Stick", action: "Move left/right" },
  { icon: "start" as const, label: "Start / Options", action: "Pause" },
  { icon: "back" as const, label: "Back / Share", action: "Return to main menu" },
];

export const upgrades = [
  { level: 0, delay: "5 seconds", cost: null },
  { level: 1, delay: "4 seconds", cost: 300 },
  { level: 2, delay: "3 seconds", cost: 600 },
  { level: 3, delay: "2 seconds", cost: 1200 },
  { level: 4, delay: "1 second", cost: 2000 },
  { level: 5, delay: "Instant", cost: 3500 },
];

export type UpgradeKind = {
  id: string;
  label: string;
  desc: string;
  levels: { level: number; value: string; cost: number | null }[];
};

/** Five upgrade types in the UPGRADE tab of the Shop (UpgradeKind.java). */
export const upgradeKinds: UpgradeKind[] = [
  {
    id: "collect-speed",
    label: "Collect Speed",
    desc: "Speed up the time needed to collect a piece of trash.",
    levels: [
      { level: 0, value: "5 seconds", cost: null },
      { level: 1, value: "4 seconds", cost: 300 },
      { level: 2, value: "3 seconds", cost: 600 },
      { level: 3, value: "2 seconds", cost: 1200 },
      { level: 4, value: "1 second", cost: 2000 },
      { level: 5, value: "Instant", cost: 3500 },
    ],
  },
  {
    id: "move-speed",
    label: "Run Speed",
    desc: "Increase the character's movement speed when running left/right.",
    levels: [
      { level: 0, value: "220 px/s", cost: null },
      { level: 1, value: "280 px/s", cost: 250 },
      { level: 2, value: "340 px/s", cost: 500 },
      { level: 3, value: "400 px/s", cost: 900 },
      { level: 4, value: "460 px/s", cost: 1400 },
      { level: 5, value: "520 px/s", cost: 2200 },
    ],
  },
  {
    id: "jump-power",
    label: "Jump Height",
    desc: "Jump higher so you can reach farther platforms.",
    levels: [
      { level: 0, value: "560 px/s", cost: null },
      { level: 1, value: "630 px/s", cost: 350 },
      { level: 2, value: "700 px/s", cost: 700 },
      { level: 3, value: "770 px/s", cost: 1300 },
      { level: 4, value: "840 px/s", cost: 2100 },
    ],
  },
  {
    id: "collect-radius",
    label: "Collect Radius",
    desc: "Extend the range so you can collect trash from farther away.",
    levels: [
      { level: 0, value: "55 px", cost: null },
      { level: 1, value: "75 px", cost: 400 },
      { level: 2, value: "95 px", cost: 800 },
      { level: 3, value: "115 px", cost: 1500 },
      { level: 4, value: "135 px", cost: 2400 },
    ],
  },
  {
    id: "coin-bonus",
    label: "Coin Bonus",
    desc: "Earn extra coins every time you successfully collect trash.",
    levels: [
      { level: 0, value: "+0%", cost: null },
      { level: 1, value: "+10%", cost: 500 },
      { level: 2, value: "+20%", cost: 1000 },
      { level: 3, value: "+35%", cost: 1800 },
      { level: 4, value: "+50%", cost: 2800 },
      { level: 5, value: "+75%", cost: 4200 },
    ],
  },
];

/** Settings the player picks on the Create World screen (WorldMeta.java). */
export const worldOptions = [
  {
    label: "World Size",
    values: ["Small", "Medium", "Large", "Very Large"],
    detail: "140 / 220 / 320 / 420 tiles wide",
  },
  {
    label: "Difficulty Level",
    values: ["Relaxed", "Normal", "Hard"],
    detail: "Coin multiplier 1.2x / 1.0x / 0.8x",
  },
  {
    label: "Starting Time",
    values: ["Day", "Evening", "Night"],
    detail: "Determines the starting position of the day-night cycle",
  },
  {
    label: "Cycle Speed",
    values: ["Slow", "Normal", "Fast"],
    detail: "0.6x / 1.0x / 1.7x day-night speed",
  },
  {
    label: "Trash Density",
    values: ["Sparse", "Medium", "High", "Very High"],
    detail: "Maximum of 10 / 16 / 22 / 30 active trash",
  },
  {
    label: "Golden Chance",
    values: ["Low", "Normal", "High"],
    detail: "4% / 8% / 16% chance trash becomes golden",
  },
  {
    label: "Weather",
    values: ["Clear", "Cloudy", "Rain"],
    detail: "Changes the sky atmosphere and particles",
  },
  {
    label: "Number of Bins",
    values: ["2 Bins", "3 Bins", "4 Bins", "5 Bins"],
    detail: "Trash deposit points scattered across the map",
  },
];

/** Combo chain: +8% per level, maximum +72%, 4-second window. */
export const comboChain = Array.from({ length: 10 }, (_, i) => ({
  chain: i + 1,
  bonus: Math.min(i, 9) * 8,
}));

export const economy = {
  baseCoins: "5 – 10 coins",
  goldenMultiplier: "3x base coins",
  comboWindow: "4 seconds",
  comboMax: "+72%",
  coinBonusMax: "+75%",
  formula: "coins = base × (1 + upgradeBonus + comboBonus) × difficultyMultiplier",
};

export const controllerFeatures = [
  {
    title: "Full Rebind",
    desc: "Separate KEYBOARD and CONTROLLER tabs. Bind actions to any button, stick, trigger, or D-Pad on a connected controller.",
  },
  {
    title: "Authentic Xbox & PlayStation Icons",
    desc: "Buttons are shown as A/B/X/Y or Cross/Circle/Square/Triangle icons, following the controller brand or forced via the Icon Style setting.",
  },
  {
    title: "Navigate Every Menu",
    desc: "Main Menu, Settings, Shop, Keybind, World Select, and the pause menu can all be operated without a mouse at all.",
  },
  {
    title: "Automatic Detection",
    desc: "Xbox, PlayStation, or a generic controller is instantly recognized with sensible default bindings.",
  },
];

export const displaySettings = [
  { label: "Resolution", value: "1024x600 → 1920x1080 (16:9)" },
  { label: "FPS Cap", value: "30 / 60 / 75 / 120 / 144 / 165 / Unlimited" },
  { label: "Graphics Quality", value: "Low, Medium, High (No difference)" },
  { label: "Minimap Size", value: "Level 1 - 10" },
  { label: "Fullscreen", value: "Can be toggled at any time" },
  { label: "Volume", value: "Music and sound effects separated" },
];

export const saveInfo = [
  { platform: "Windows", path: "C:\\Users\\<user>\\.trashcollectorgame\\save.properties" },
  { platform: "macOS / Linux", path: "!Not supported yet at this time!" },
];

export const worldSystem = [
  {
    title: "Multiple Worlds",
    desc: "Inspired by Minecraft, create several worlds at once, each with its own save file, seed, and play time.",
  },
  {
    title: "Consistent Seed",
    desc: "The seed is the sole source of randomness for the terrain shape, the layout is always identical every time the world is reopened.",
  },
  {
    title: "Random Trash Spawn",
    desc: "Only the trash positions are re-randomized on each entry, so every session still feels fresh.",
  },
  {
    title: "Seamless Continue",
    desc: "The player's position, the day-night phase, and any trash not yet deposited are also saved on exit.",
  },
];

export const faq = [
  {
    q: "Is the game free?",
    a: "Yes. Trash Collector Game is an independent personal project that was originally made for a school assignment.",
  },
  {
    q: "Do I need to install Java?",
    a: "No. The Windows release is distributed as a portable .zip that already bundles its own Java runtime — just extract and run the .exe inside it, no installation required.",
  },
  {
    q: "Does it support a controller?",
    a: "Since v2.3.0 all gameplay and menus can be operated fully with an Xbox, PlayStation, or other gamepad.",
  },
  {
    q: "Where is my progress saved?",
    a: "Coins, characters, upgrades, settings, and keybinds are saved automatically in the .trashcollectorgame folder in the home directory.",
  },
  {
    q: "Can I play with just a keyboard?",
    a: "Yes. A controller is entirely optional, all gameplay and menus are designed to work fully with a keyboard.",
  },
];

export const stats = [
  { value: 16, suffix: "", label: "Characters" },
  { value: 5, suffix: "", label: "Biomes" },
  { value: 9, suffix: "", label: "Trash Types" },
  { value: 5, suffix: "", label: "Upgrade Types" },
];

export type ChangelogEntry = {
  version: string;
  date: string;
  title: string;
  changes: { type: "added" | "changed" | "fixed"; text: string }[];
};