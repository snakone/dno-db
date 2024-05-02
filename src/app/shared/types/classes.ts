import { DNO_CLASSES, DNO_ITEM_SETS, DNO_ITEM_PIECE_TYPE, BINARY_LIST, DNO_ITEM_RARITY } from "./enums";
import { CalculationProps } from "./interfaces";

export class Calculation {
  class: DNO_CLASSES = DNO_CLASSES.NONE;
  set: DNO_ITEM_SETS = DNO_ITEM_SETS.NONE;
  piece: DNO_ITEM_PIECE_TYPE | "Full" = DNO_ITEM_PIECE_TYPE.NONE;
  from: number = null!;
  to: number = null!;
  hp: number = null!;
  mp: number = null!;
  jellies: BINARY_LIST = BINARY_LIST.NONE;
  friendship: BINARY_LIST = BINARY_LIST.NONE;
  rarity: DNO_ITEM_RARITY = null!;
  att?: number = null!;
  mag?: number = null!;

  constructor(args?: CalculationProps) {
    if (args) {
      Object.assign(this, args);
    }
  }
}