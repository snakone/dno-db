import { createReducer, on, Action } from '@ngrx/store';
import { CalculationResult } from '@shared/types/interfaces';
import { Calculation } from '@shared/types/classes';
import * as CalculatorsActions from './calculator.actions';

export interface CalculationState {
  result: CalculationResult | null;
  calculation: Calculation;
  error: string | null;
  loading: boolean;
}

export const inititalState: CalculationState = {
  result: null,
  calculation: new Calculation(),
  error: null,
  loading: false,
};

const featureReducer = createReducer(
  inititalState,
  // CALCULATE
  on(CalculatorsActions.calculate, (state) => ({ ...state, loading: true })),
  on(CalculatorsActions.calculateSuccess, (state, {result}) => ({ ...state, result, loading: false })),
  on(CalculatorsActions.calculateFailure, (state, {error}) => ({ ...state, error, loading: false })),
  // RESET
  on(CalculatorsActions.reset, (state) => ({ ...state, result: null, calculation: new Calculation() })),
);

export function reducer(state: CalculationState | undefined, action: Action) {
  return featureReducer(state, action);
}

export const getResult = (state: CalculationState) => state.result;
export const getLoaded = (state: CalculationState) => state.loading;