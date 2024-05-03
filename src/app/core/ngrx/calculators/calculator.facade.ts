import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as CalculatorActions from './calculator.actions';
import * as fromCalculator from './calculator.selectors';
import { CalculationState } from './calculator.reducer';
import { Calculation } from '@shared/types/classes';

@Injectable()

export class CalculatorFacade {

  public result$ = this.store.select(fromCalculator.getResult);
  public loaded$ = this.store.select(fromCalculator.getLoaded);

  constructor(private store: Store<CalculationState>) { }

  public calculate(calculation: Calculation): void {
    this.store.dispatch(CalculatorActions.calculate({calculation}));
  }

  public reset(): void {
    this.store.dispatch(CalculatorActions.reset());
  }

}