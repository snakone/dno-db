import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CalculatorFacade } from '@core/ngrx/calculators/calculator.facade';
import { DNO_SET_LIST, DNO_CLASS_LIST, DNO_ITEM_PIECE_LIST, DNO_BINARY_LIST } from '@shared/data.dno';
import { Calculation } from '@shared/types/classes';
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

  result$: Observable<CalculationResult | null> | undefined;

  public calculation = new Calculation();

  constructor(private calcFacade: CalculatorFacade) { }

  ngOnInit() {
    this.result$ = this.calcFacade.result$;
  }

  public calculate(): void {
    this.calcFacade.calculate(this.calculation);
  }

}
