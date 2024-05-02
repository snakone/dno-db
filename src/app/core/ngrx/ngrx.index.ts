import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import * as fromCalculator from '@store/calculators/calculator.reducer';
import * as fromUpdates from '@store/updates/updates.reducer';
import { CalculatorEffects } from './calculators/calculator.effects';
import { UpdatesEffects } from './updates/updates.effects';

// APP STATE
export interface AppState {
  updates: fromUpdates.UpdatesState;
}

export const appReducers: ActionReducerMap<AppState> = {
  updates: fromUpdates.reducer,
};

export const getAppState = createFeatureSelector<AppState>('AppState');

// CALCULATORS
export interface CalculatorsPartialState {
  calculators: fromCalculator.CalculationState;
}

export const calculatorReducers: ActionReducerMap<CalculatorsPartialState> = {
  calculators: fromCalculator.reducer
};

export const getCalculatorPartialState = createFeatureSelector<CalculatorsPartialState>('CalculatorState');

export const StoreEffects = [
  UpdatesEffects,
  CalculatorEffects
];