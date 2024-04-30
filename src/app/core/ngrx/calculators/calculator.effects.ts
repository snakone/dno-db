import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import * as CalculatorActions from './calculator.actions';
import { map, concatMap, catchError } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { CalculationState } from './calculator.reducer';
import { calculate } from './calculator.functions';

@Injectable()

export class CalculatorEffects {

  constructor(
    private actions: Actions,
    private store: Store<CalculationState>,
  ) { }

  // CALCULATE
  getActivitiesEffect$ = createEffect(() => this.actions
    .pipe(
      ofType(CalculatorActions.calculate),
      concatMap(({calculation}) => of(CalculatorActions.calculateSuccess({result: calculate(calculation)}))),
          catchError(error => of(CalculatorActions.calculateFailure({ error: error.message }))
    ))
  );

}