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
  piece: DNO_ITEM_PIECE_TYPE | "Full";
  from: number;
  to: number;
  hp?: number;
  mp?: number;
  jellies: BINARY_LIST;
  friendship: BINARY_LIST;
  rarity: DNO_ITEM_RARITY;
}

export interface CalculationResult {
  totalSuccess: number;
  totalFails: number;
  totalBreaks: number;
  totalDecreases: number;
  totalTries: number;
  tries: EnhancementTry[]
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
}