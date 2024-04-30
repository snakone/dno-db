import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import * as fromCalculator from '@store/calculators/calculator.reducer';
import { CalculatorEffects } from './calculators/calculator.effects';

// CALCULATORS
export interface CalculatorsPartialState {
  calculators: fromCalculator.CalculationState;
}

export const calculatorReducers: ActionReducerMap<CalculatorsPartialState> = {
  calculators: fromCalculator.reducer
};

export const getCalculatorPartialState = createFeatureSelector<CalculatorsPartialState>('CalculatorState');

export const StoreEffects = [
  CalculatorEffects
];