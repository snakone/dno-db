import { 
  CAPS_TYPES,
  DNO_ITEM_GRADES,
  DNO_ITEM_PIECE_TYPE,
  DNO_ITEM_SETS,
  UPGRADE_LEVELS 
} from "./enums";

export interface DropDownMenuItem {
  route: string;
  label: string;
}

export interface SetCraftDNO {
  id: string;
  name: string;
  level: CAPS_TYPES;
  grade: DNO_ITEM_GRADES;
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