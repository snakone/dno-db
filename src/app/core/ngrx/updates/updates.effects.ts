import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { map, concatMap, catchError } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { UpdatesState } from './updates.reducer';

@Injectable()

export class UpdatesEffects {

  constructor(
    private actions: Actions,
    private store: Store<UpdatesState>,
  ) { }


}