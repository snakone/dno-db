import { DNO_CLASSES, DNO_ITEM_SETS, DNO_ITEM_PIECE_TYPE } from "./enums";
import { CalculationProps } from "./interfaces";

export class Calculation {
  class: DNO_CLASSES = null!;
  set: DNO_ITEM_SETS = null!;
  piece: DNO_ITEM_PIECE_TYPE | "Full" = null!;
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