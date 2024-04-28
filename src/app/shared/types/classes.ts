import { DNO_CLASSES, DNO_ITEM_SETS, DNO_ITEM_PIECE_TYPE } from "./enums";
import { CalculationProps } from "./interfaces";

export class Calculation {
  class: DNO_CLASSES = DNO_CLASSES.NONE;
  set: DNO_ITEM_SETS = DNO_ITEM_SETS.NONE;
  piece: DNO_ITEM_PIECE_TYPE | "Full" = DNO_ITEM_PIECE_TYPE.NONE;
  from: number = null!;
  to: number = null!;
  hp: number = null!;
  mp: number = null!;
  jellies: boolean = false;
  friendship: boolean = false;

  constructor(args?: CalculationProps) {
    if (args) {
      Object.assign(this, args);
    }
  }
}