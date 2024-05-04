import { DNO_CLASSES, DNO_ITEM_SETS, BINARY_LIST } from "./enums";
import { CalculationProps } from "./interfaces";

export class Calculation {
  class: DNO_CLASSES = DNO_CLASSES.NONE;
  set: DNO_ITEM_SETS = DNO_ITEM_SETS.NONE;
  piece!: string;
  from: number = null!;
  to: number = null!;
  jellies: BINARY_LIST = BINARY_LIST.NONE;
  friendship: BINARY_LIST = BINARY_LIST.NONE;
  hp: number = null!;
  mp: number = null!;
  att?: number = null!;
  mag?: number = null!;

  constructor(args?: CalculationProps) {
    if (args) {
      Object.assign(this, args);
    }
  }
}