import { createAction, props } from "@ngrx/store";
import { UpdateItem } from "@shared/types/interfaces";

// UPDATES
export const get =
  createAction('[Updates] Get Updates');

export const getSuccess =
  createAction('[Updates] Get Updates Success', props<{updates: UpdateItem[]}>());

export const getFailure =
  createAction('[Updates] Get Updates Failure', props<{error: string}>());