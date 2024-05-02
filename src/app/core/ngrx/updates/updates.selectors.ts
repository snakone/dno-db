import { createSelector } from '@ngrx/store';

import * as fromUpdates from './updates.reducer';
import { AppState, getAppState } from '../ngrx.index';

export const getUpdatesState = createSelector(
  getAppState,
  (state: AppState) => state.updates
);

export const getUpdates = createSelector(getUpdatesState, fromUpdates.getUpdates);
export const getLoaded = createSelector(getUpdatesState, fromUpdates.getLoaded);