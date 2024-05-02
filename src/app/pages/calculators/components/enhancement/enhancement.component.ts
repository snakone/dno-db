import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CalculatorFacade } from '@core/ngrx/calculators/calculator.facade';
import { DNO_SET_LIST, DNO_CLASS_LIST, DNO_ITEM_PIECE_LIST, DNO_BINARY_LIST } from '@shared/data.dno';
import { Calculation } from '@shared/types/classes';
import { BINARY_LIST, DNO_CLASSES, DNO_ITEM_PIECE_TYPE, DNO_ITEM_RARITY, DNO_ITEM_SETS } from '@shared/types/enums';
import { CalculationResult } from '@shared/types/interfaces';
import { Observable } from 'rxjs';

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
  }

}
