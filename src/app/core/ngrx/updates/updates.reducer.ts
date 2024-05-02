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
      date: 'Jan 27',
      title: 'Lorem dolor sit amet veroeros',
      body: 'Ipsum dolor sit amet veroeros consequat blandit ipsum phasellus lorem consequat etiam.',
      url: '/home'
    },
    {
      date: 'Jan 23',
      title: 'Ipsum sed blandit nisl consequat',
      body: 'Blandit phasellus lorem ipsum dolor tempor sapien tortor hendrerit adipiscing feugiat lorem.',
      url: '/home'
    },
    {
      date: 'Jan 15',
      title: 'Magna tempus lorem feugiat',
      body: 'Dolore consequat sed phasellus lorem sed etiam nullam dolor etiam sed amet sit consequat.',
      url: '/home'
    },
    {
      date: 'Jan 12',
      title: 'Dolore tempus ipsum feugiat nulla',
      body: 'Feugiat lorem dolor sed nullam tempus lorem ipsum dolor sit amet nullam consequat.',
      url: '/home'
    },
    {
      date: 'Jan 10',
      title: 'Blandit tempus aliquam?',
      body: 'Feugiat sed tempus blandit tempus adipiscing nisl lorem ipsum dolor sit amet dolore.',
      url: '/home'
    }
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