import { ChangeDetectionStrategy, Component } from '@angular/core';

import { CalculationsService } from '@services/calculations.service';
import { DNO_BINARY_LIST, DNO_CLASS_LIST, DNO_ITEM_PIECE_LIST, DNO_SET_LIST } from '@shared/data.dno';
import { Calculation } from '@typed/classes';
import { UPGRADE_LEVELS } from '@typed/enums';

@Component({
  selector: 'app-calculators',
  templateUrl: './calculators.component.html',
  styleUrl: './calculators.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CalculatorsComponent {

  setList = DNO_SET_LIST;
  classList = DNO_CLASS_LIST;
  pieceList = DNO_ITEM_PIECE_LIST;
  jellyList = DNO_BINARY_LIST;
  friendList = DNO_BINARY_LIST;
  totalSuccess: number = 0;
  totalFails: number = 0;

  public calculation!: Calculation;

  constructor(private calcSrv: CalculationsService) {}

  ngOnInit() {
    this.calculation = new Calculation();
  }

  public calculate(): void {
    this.totalFails = 0;
    this.totalSuccess = 0;
    this.calcSrv.setCalculation(this.calculation);
    let nextLevel = this.calculation.from + 1 as UPGRADE_LEVELS;

    while(nextLevel <= this.calculation.to) {
      const rate = this.calcSrv.getRateFromGrade(nextLevel);
      const random = Math.ceil(Math.random() * 100);
      if(random <= rate) {
        nextLevel++;
        this.totalSuccess++;
      } else {
        this.totalFails++;
      }
    }
  }
}
