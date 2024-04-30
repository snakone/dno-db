import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { calculatorReducers } from '../../ngrx.index';
import { CalculatorFacade } from '../calculator.facade';

@NgModule({
  imports: [
    StoreModule.forFeature('CalculatorState', calculatorReducers),
    EffectsModule.forFeature([]),
  ],
  providers: [CalculatorFacade]
})

export class CalculatorAccessModule { }