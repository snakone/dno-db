import { createReducer, on, Action } from '@ngrx/store';
import * as CalculatorsActions from './updates.actions';
import { UpdateItem } from '@shared/types/interfaces';

export interface UpdatesState {
  updates: UpdateItem[];
  loaded: boolean;
  error: string | null;
}

export const inititalState: UpdatesState = {
  updates: [
    {
      date: 'May 10',
      title: 'Scaling Database',
      body: 'Class stats scaling for 2nd specialization.',
      url: '/database/class-scaling'
    },
    {
      date: 'May 05',
      title: 'Enhancement Database',
      body: 'All craftable items in one place with the custom DNO Official changes.',
      url: '/database/materials'
    },
    {
      date: 'May 03',
      title: 'Enhancement Calculator',
      body: 'Have you ever wonder how much it will cost to upgrade your favourite weapon?',
      url: '/calculators/enhancement'
    },
    {
      date: 'May 01',
      title: 'DNO-DB has born!',
      body: 'Welcome every DN Lover! We are here to help players in their journey on Althea!'
    },
  ],
  error: null,
  loaded: false,
};

const featureReducer = createReducer(
  inititalState,
  // CALCULATE
  on(CalculatorsActions.getSuccess, (state, {updates}) => ({ ...state, updates, loaded: true })),
  on(CalculatorsActions.getFailure, (state, {error}) => ({ ...state, error, loaded: false })),
);

export function reducer(state: UpdatesState | undefined, action: Action) {
  return featureReducer(state, action);
}

export const getUpdates = (state: UpdatesState) => state.updates;
export const getLoaded = (state: UpdatesState) => state.loaded;