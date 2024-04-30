import { createSelector } from '@ngrx/store';

import * as fromCalculators from './calculator.reducer';
import { CalculatorsPartialState, getCalculatorPartialState } from '../ngrx.index';

export const getCalculatorState = createSelector(
  getCalculatorPartialState,
  (state: CalculatorsPartialState) => state.calculators
);

export const getResult = createSelector(getCalculatorState, fromCalculators.getResult);
export const getLoaded = createSelector(getCalculatorState, fromCalculators.getLoaded);