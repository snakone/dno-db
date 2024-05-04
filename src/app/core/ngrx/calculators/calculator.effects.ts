import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import * as CalculatorActions from './calculator.actions';
import { map, concatMap, catchError, filter } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { CalculationState } from './calculator.reducer';
import { calculate } from './calculator.functions';
import { ItemsService } from '@core/services/api/items/items.service';

@Injectable()

export class CalculatorEffects {

  constructor(
    private actions: Actions,
    private store: Store<CalculationState>,
    private itemSrv: ItemsService
  ) { }

   // CALCULATE BY PIECE NAME
  calculateByPieceNameEffect$ = createEffect(() => this.actions
    .pipe(
      ofType(CalculatorActions.calculate),
      filter(action => Boolean(action.calculation)),
      concatMap(({calculation}) =>
      this.itemSrv.getItemByName(calculation.piece)
        .pipe(
          map(item => CalculatorActions.calculateSuccess({ result: calculate(calculation, item) })),
          catchError(error => of(CalculatorActions.calculateFailure({ error: error.message })
        )
    ))))
  );

}