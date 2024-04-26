import { DNO_CLASSES, DNO_ITEM_SETS, DNO_ITEM_PIECE_TYPE } from "./enums";
import { CalculationProps } from "./interfaces";

export class Calculation {
  class!: DNO_CLASSES;
  set!: DNO_ITEM_SETS;
  piece!: DNO_ITEM_PIECE_TYPE | "Full";
  from!: number;
  to!: number;
  hp!: number;
  mp!: number;
  jellies!: boolean;
  friendship!: boolean;

  constructor(args?: CalculationProps) {
    if(args !== undefined) {
      Object.assign(this, {...args});
    } else {
      this.class = null!;
      this.set = null!;
      this.piece = null!;
      this.from = null!;
      this.to = null!;
      this.hp = null!;
      this.mp = null!;
      this.jellies = false;
      this.friendship = false;
    }
  }
}