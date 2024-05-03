import { createAction, props } from "@ngrx/store";
import { Calculation } from "@shared/types/classes";
import { CalculationResult } from "@shared/types/interfaces";

// CALCULATE
export const calculate =
  createAction('[Calculators] Calculate', props<{calculation: Calculation}>());

export const calculateSuccess =
  createAction('[Calculators] Calculate Success', props<{result: CalculationResult}>());

export const calculateFailure =
  createAction('[Calculators] Calculate Failure', props<{error: string}>());

// RESET
export const reset = createAction('[Calculators] Reset');