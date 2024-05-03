import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';

import { Calculation } from '@shared/types/classes';
import { CalculatorFacade } from '@core/ngrx/calculators/calculator.facade';
import { CalculationResult, SimpleItem } from '@shared/types/interfaces';

import { 
  BINARY_LIST,
  DNO_CLASSES,
  DNO_ITEM_PIECE_TYPE,
  DNO_ITEM_RARITY,
  DNO_ITEM_SETS, 
  ENHANCEMENT_RESULT
} from '@shared/types/enums';

import { 
  DNO_SET_LIST,
  DNO_CLASS_LIST,
  DNO_ITEM_PIECE_LIST,
  DNO_BINARY_LIST,
  SET_PIECES_BY_CLASS
} from '@shared/data.dno';

@Component({
  selector: 'app-enhancement',
  templateUrl: './enhancement.component.html',
  styleUrl: './enhancement.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class EnhancementComponent {

  setList = DNO_SET_LIST;
  classList = DNO_CLASS_LIST;
  pieceList = DNO_ITEM_PIECE_LIST;
  jellyList = DNO_BINARY_LIST;
  friendList = DNO_BINARY_LIST;
  prayList = DNO_BINARY_LIST;

  result$: Observable<CalculationResult | null> | undefined;

  public calculation = new Calculation({
    class: DNO_CLASSES.ARCHER,
    from: 0,
    to: 12,
    rarity: DNO_ITEM_RARITY.EPIC,
    jellies: BINARY_LIST.YES,
    friendship: BINARY_LIST.YES,
    piece: DNO_ITEM_PIECE_TYPE.WEAPON,
    set: DNO_ITEM_SETS.FLINT,
  });

  constructor(private calcFacade: CalculatorFacade) { }

  ngOnInit() {
    this.result$ = this.calcFacade.result$;
  }

  public calculate(): void {
    this.calcFacade.calculate(this.calculation);
  }

  public reset(): void {
    this.calculation = new Calculation();
    this.calcFacade.reset();
  }

  public onSetChange(className: DNO_CLASSES, set: DNO_ITEM_SETS) {
    this.pieceList = Object.entries(SET_PIECES_BY_CLASS[className][set])
                           .map(([key, value]) => ({ key, label: value })) as SimpleItem[];

    this.calculation.piece = DNO_ITEM_PIECE_TYPE.NONE;

    if(set.includes("Legend")) {
      this.calculation.rarity = DNO_ITEM_RARITY.LEGEND;
    } else if(set.includes("Dragon")) {
      this.calculation.rarity = DNO_ITEM_RARITY.UNIQUE;
    }
  }

  public onClassChange(): void {
    this.calculation.set = DNO_ITEM_SETS.NONE;
    this.calculation.piece = DNO_ITEM_PIECE_TYPE.NONE;
  }

  public getBadgeResult(result: ENHANCEMENT_RESULT): string | undefined {
    switch(result) {
      case ENHANCEMENT_RESULT.SUCCESS: {
        return '<i class="fas fa-check"></i>';
      }

      case ENHANCEMENT_RESULT.FAIL: {
        return '<i class="fas fa-times">';
      }

      case ENHANCEMENT_RESULT.BREAK: {
        return '<i class="fas fa-heart-broken">'
      }

      case ENHANCEMENT_RESULT.DECREASE: {
        return '<i class="fas fa-arrow-down">'
      }
    }

    return undefined;
  }

}
