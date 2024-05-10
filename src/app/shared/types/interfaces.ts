import {
  CAPS_TYPES,
  DNO_ITEM_RARITY,
  DNO_ITEM_PIECE_TYPE,
  DNO_ITEM_SETS,
  UPGRADE_LEVELS,
  DNO_CLASSES,
  BINARY_LIST,
  ENHANCEMENT_RESULT
} from "./enums";

export interface SimpleItem {
  key: string;
  label: string | number;
}

export interface DropDownMenuItem extends SimpleItem { }

export interface SetCraftDNO {
  id: string;
  name: string;
  level: CAPS_TYPES;
  grade: DNO_ITEM_RARITY;
  set: DNO_ITEM_SETS;
}

export interface SetCraftPieceDNO extends SetCraftDNO {
  type: DNO_ITEM_PIECE_TYPE;
  stats: PieceStatDNO;
  upgradeLevel: UPGRADE_LEVELS;
}

export interface PieceStatDNO {
  pDef?: number;
  mDef?: number;
  attPow?: number;
  magPow?: number;
  crit?: number;
}

export interface CalculationProps {
  class: DNO_CLASSES;
  set: DNO_ITEM_SETS;
  piece: string;
  from: number;
  to: number;
  jellies: BINARY_LIST;
  friendship: BINARY_LIST;
  spring: 1 | 10 | 20 | 30;
  hp?: number;
  mp?: number;
  att?: number;
  mag?: number;
}

export interface CalculationResult {
  totalSuccess: number;
  totalFails: number;
  totalBreaks: number;
  totalDecreases: number;
  totalTries: number;
  tries: EnhancementTry[];
  totalMaterials?: DNO_EnhancementItemMaterials;
}

export interface UpdateItem {
  date: string;
  title: string;
  body: string;
  url?: string;
}

export interface EnhancementTry {
  from: UPGRADE_LEVELS;
  to: UPGRADE_LEVELS;
  result: ENHANCEMENT_RESULT;
  decrease: number;
  materials?: DNO_EnhancementItemMaterials;
  stats?: DNO_EnhancementItemBaseStats;
  rate?: number;
}

export interface DNO_EnhancementItem {
  BaseStats: DNO_EnhancementItemBaseStats;
  Details: DNO_EnhancementItemDetails[];
  Level: number;
  Rarity: number;
  name: string;
}

export interface DNO_EnhancementItemBaseStats {
  HP?: number;
  INT?: number;
  VIT?: number;
  AGI?: number;
  STR?: number;
  MP?: number;
  Critical?: number;
  ["Magic Def"]?: number;
  ["Phy Def"]?: number;
  ["Para Resist"]?: number;
  ["Stun Resist"]?: number;
  ["Crit Resist"]?: number;
  ["Attk Power (Max)"]?: number;
  ["Attk Power (Min)"]?: number;
  ["Magic Attk (Max)"]?: number;
  ["Magic Attk (Min)"]?: number;
  Para?: number;
  Stun?: number;
}

export interface DNO_EnhancementItemDetails {
  BreakRatio: number;
  EnchantLevel: number;
  EnchantRatio: number;
  Gold: number;
  Materials?: DNO_EnhancementItemMaterials;
  MaxDowngrade: number;
  MinDowngrade: number;
  Stats?: DNO_EnhancementItemBaseStats;
}

export interface DNO_EnhancementItemMaterials {
  ["Rough Alteum"]?: number;
  ["Rough Diamond"]?: number;
  ["Ordinary Alteum"]?: number;
  ["Ordinary Diamond"]?: number;
  ["Polished Alteum"]?: number;
  ["Polished Diamond"]?: number;
  ["Flawless Alteum"]?: number;
  ["Flawless Diamond"]?: number;
  ["Perfect Diamond"]?: number;
  ["Perfect Alteum"]?: number;
  ["Essence of Life"]?: number;
  ["Item Protection Jellies"]?: number;
  Gold?: number;
}

// SERVER RESPONSES
interface ServerResponse {
  ok: boolean;
  message?: string;
  err?: any;
}

export interface DNOItemResponse extends ServerResponse {
  item: DNO_EnhancementItem;
}

export interface DNOItemMaterial {
  _id?: string;
  "Item Name": string;
  EnchantLevel: number;
  EnchantRatio: number;
  BreakRatio: number;
  MinDowngrade: number;
  MaxDowngrade: number;
  Gold: number;
}

export interface DNOItemMaterialResponse extends ServerResponse {
  items: DNOItemMaterial[];
}

export interface SkillBuildContainer {
  name: string;
  class: string;
  icon: string;
  currentSP: number;
  totalSP: number;
  tree: SkillBuildTree;
}

export interface SkillBuildTree {
  rows: SkillBuildTreeRow;
}

export interface SkillBuildTreeRow {
  id: string;
  currentPoints: number;
  totalPoints: number;
  image: string;
  stats: SkillBuildTreeRowStats[];
  requires: (row: SkillBuildTreeRow) => boolean;
  depends: SkillBuildTreeRow[];
}

export interface SkillBuildTreeRowStats {
  type: string;
  element: string;
  weapon: string;
  description: string;
  level: number;
  cost: number;
  learnAt: number;
  cooldown: number;
}

export interface ClassStats {
  className: string;
  pdmgStr: number;
  pdmgAgi: number;
  mdmgInt: number;
  critdmgStr: number;
  critdmgAgi: number;
  critdmgInt: number;
  hpVit: number;
  pdefVit: number;
  mdefInt: number;
  critAgi: number;
}

export const classStats = {
  [DNO_CLASSES.WARRIOR]: [
    { className: "Gladiator", pdmgStr: 0.75, pdmgAgi: 0.25, mdmgInt: 0, critdmgStr: 3.25, critdmgAgi: 0, critdmgInt: 0, hpVit: 35, pdefVit: 0.9, mdefInt: 0, critAgi: 6 },
    { className: "Moonlord", pdmgStr: 0, pdmgAgi: 0, mdmgInt: 1, critdmgStr: 0, critdmgAgi: 0, critdmgInt: 3.25, hpVit: 35, pdefVit: 0.9, mdefInt: 0, critAgi: 6 },
    { className: "Barbarian", pdmgStr: 0.75, pdmgAgi: 0.25, mdmgInt: 0, critdmgStr: 3.25, critdmgAgi: 0, critdmgInt: 0, hpVit: 35, pdefVit: 0.9, mdefInt: 0, critAgi: 6 },
    { className: "Destroyer", pdmgStr: 0.75, pdmgAgi: 0.25, mdmgInt: 0, critdmgStr: 3.25, critdmgAgi: 0, critdmgInt: 0, hpVit: 45, pdefVit: 0.9, mdefInt: 0, critAgi: 6 },
  ],
  [DNO_CLASSES.ARCHER]: [
    { className: "Sniper", pdmgStr: 0.25, pdmgAgi: 0.75, mdmgInt: 0, critdmgStr: 6, critdmgAgi: 0, critdmgInt: 0, hpVit: 28, pdefVit: 0.7, mdefInt: 0, critAgi: 3.25 },
    { className: "Sentinel", pdmgStr: 0, pdmgAgi: 0, mdmgInt: 1, critdmgStr: 0, critdmgAgi: 0, critdmgInt: 3.25, hpVit: 28, pdefVit: 0.7, mdefInt: 0, critAgi: 6 },
    { className: "Tempest", pdmgStr: 0.25, pdmgAgi: 0.75, mdmgInt: 0, critdmgStr: 6, critdmgAgi: 0, critdmgInt: 0, hpVit: 28, pdefVit: 0.7, mdefInt: 0, critAgi: 3.25 },
    { className: "Windwalker", pdmgStr: 0.25, pdmgAgi: 0.75, mdmgInt: 0, critdmgStr: 6, critdmgAgi: 0, critdmgInt: 0, hpVit: 28, pdefVit: 0.7, mdefInt: 0, critAgi: 3.25 },
  ],
  [DNO_CLASSES.ACADEMIC]: [
    { className: "Shooting Star", pdmgStr: 0.25, pdmgAgi: 0.75, mdmgInt: 0, critdmgStr: 6, critdmgAgi: 0, critdmgInt: 0, hpVit: 30, pdefVit: 0.7, mdefInt: 0, critAgi: 3.25 },
    { className: "Gear Master", pdmgStr: 0.25, pdmgAgi: 0.75, mdmgInt: 0, critdmgStr: 6, critdmgAgi: 0, critdmgInt: 0, hpVit: 30, pdefVit: 0.7, mdefInt: 0, critAgi: 3.25 },
    { className: "Adept", pdmgStr: 0, pdmgAgi: 0, mdmgInt: 0.8, critdmgStr: 0, critdmgAgi: 0, critdmgInt: 3.25, hpVit: 30, pdefVit: 0.7, mdefInt: 0, critAgi: 6 },
    { className: "Physician", pdmgStr: 0, pdmgAgi: 0, mdmgInt: 0.8, critdmgStr: 0, critdmgAgi: 0, critdmgInt: 3.25, hpVit: 30, pdefVit: 0.7, mdefInt: 0, critAgi: 6 },
  ],
  [DNO_CLASSES.ASSASSIN]: [
    { className: "Reaper", pdmgStr: 0.5, pdmgAgi: 0.5, mdmgInt: 0, critdmgStr: 2.875, critdmgAgi: 0, critdmgInt: 0, hpVit: 26, pdefVit: 0.5, mdefInt: 0, critAgi: 2.875 },
    { className: "Raven", pdmgStr: 0.5, pdmgAgi: 0.5, mdmgInt: 0, critdmgStr: 2.875, critdmgAgi: 0, critdmgInt: 0, hpVit: 26, pdefVit: 0.5, mdefInt: 0, critAgi: 2.875 },
    { className: "Light Fury", pdmgStr: 0.5, pdmgAgi: 0.5, mdmgInt: 0, critdmgStr: 2.875, critdmgAgi: 0, critdmgInt: 0, hpVit: 26, pdefVit: 0.5, mdefInt: 0, critAgi: 2.875 },
    { className: "Abyss Walker", pdmgStr: 0.5, pdmgAgi: 0.5, mdmgInt: 0, critdmgStr: 2.875, critdmgAgi: 0, critdmgInt: 0, hpVit: 26, pdefVit: 0.5, mdefInt: 0, critAgi: 2.875 },
  ],
  [DNO_CLASSES.CLERIC]: [
    { className: "Guardian", pdmgStr: 0.75, pdmgAgi: 0.25, mdmgInt: 0, critdmgStr: 3.25, critdmgAgi: 0, critdmgInt: 0, hpVit: 35, pdefVit: 1, mdefInt: 0, critAgi: 6 },
    { className: "Crusader", pdmgStr: 0, pdmgAgi: 0, mdmgInt: 1, critdmgStr: 0, critdmgAgi: 0, critdmgInt: 3.25, hpVit: 35, pdefVit: 1, mdefInt: 0, critAgi: 6 },
    { className: "Saint", pdmgStr: 0, pdmgAgi: 0, mdmgInt: 0.8, critdmgStr: 0, critdmgAgi: 0, critdmgInt: 3.25, hpVit: 35, pdefVit: 1, mdefInt: 0, critAgi: 6 },
    { className: "Inquisitor", pdmgStr: 0, pdmgAgi: 0, mdmgInt: 0.8, critdmgStr: 0, critdmgAgi: 0, critdmgInt: 3.25, hpVit: 35, pdefVit: 1, mdefInt: 0, critAgi: 6 },
  ],
  [DNO_CLASSES.KALI]: [
    { className: "Dark Summoner", pdmgStr: 0, pdmgAgi: 0, mdmgInt: 0.8, critdmgStr: 0, critdmgAgi: 0, critdmgInt: 3.25, hpVit: 26, pdefVit: 0.9, mdefInt: 0, critAgi: 6 },
    { className: "Soul Eater", pdmgStr: 0, pdmgAgi: 0, mdmgInt: 0.8, critdmgStr: 0, critdmgAgi: 0, critdmgInt: 3.25, hpVit: 26, pdefVit: 0.9, mdefInt: 0, critAgi: 6 },
    { className: "Blade Dancer", pdmgStr: 0.75, pdmgAgi: 0.25, mdmgInt: 0, critdmgStr: 3.25, critdmgAgi: 0, critdmgInt: 0, hpVit: 26, pdefVit: 0.9, mdefInt: 0, critAgi: 6 },
    { className: "Spirit Dancer", pdmgStr: 0.75, pdmgAgi: 0.25, mdmgInt: 0, critdmgStr: 3.25, critdmgAgi: 0, critdmgInt: 0, hpVit: 26, pdefVit: 0.9, mdefInt: 0, critAgi: 6 },
  ],
  [DNO_CLASSES.LANCEA]: [
    { className: "Flurry", pdmgStr: 0.75, pdmgAgi: 0.25, mdmgInt: 0, critdmgStr: 3.25, critdmgAgi: 0, critdmgInt: 0, hpVit: 34, pdefVit: 1, mdefInt: 0, critAgi: 6 },
  ],
  [DNO_CLASSES.SORCERESS]: [
    { className: "Seleana", pdmgStr: 0, pdmgAgi: 0, mdmgInt: 0.8, critdmgStr: 0, critdmgAgi: 0, critdmgInt: 3.25, hpVit: 26, pdefVit: 0.6, mdefInt: 0, critAgi: 6 },
    { className: "Glaciana", pdmgStr: 0, pdmgAgi: 0, mdmgInt: 0.8, critdmgStr: 0, critdmgAgi: 0, critdmgInt: 3.25, hpVit: 26, pdefVit: 0.6, mdefInt: 0, critAgi: 6 },
    { className: "Illuminia", pdmgStr: 0, pdmgAgi: 0, mdmgInt: 0.8, critdmgStr: 0, critdmgAgi: 0, critdmgInt: 3.25, hpVit: 26, pdefVit: 0.6, mdefInt: 0, critAgi: 6 },
    { className: "Obscuria", pdmgStr: 0, pdmgAgi: 0, mdmgInt: 0.8, critdmgStr: 0, critdmgAgi: 0, critdmgInt: 3.25, hpVit: 26, pdefVit: 0.6, mdefInt: 0, critAgi: 6 },
  ]
}
