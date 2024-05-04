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
  label: string;
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
  url: string;
}

export interface EnhancementTry {
  from: UPGRADE_LEVELS;
  to: UPGRADE_LEVELS;
  result: ENHANCEMENT_RESULT;
  decrease: number;
  materials?: DNO_EnhancementItemMaterials;
  stats?: DNO_EnhancementItemBaseStats;
}

export interface DNO_EnhancementItem {
  BaseStats: DNO_EnhancementItemBaseStats;
  Details: DNO_EnhancementItemDetails[];
  Level: number;
  Rarity: number;
  item: string;
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