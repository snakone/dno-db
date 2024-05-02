import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as UpdatesActions from './updates.actions';

import * as fromUpdates from './updates.selectors';
import { UpdatesState } from './updates.reducer';

@Injectable({providedIn: 'root'})

export class UpdatesFacade {

  public updates$ = this.store.select(fromUpdates.getUpdates);
  public loaded$ = this.store.select(fromUpdates.getLoaded);

  constructor(private store: Store<UpdatesState>) { }

  public get(): void {
    this.store.dispatch(UpdatesActions.get());
  }

}