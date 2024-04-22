import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalculatorsRoutingModule } from './calculators-routing.module';
import { CalculatorsComponent } from './calculators.component';


@NgModule({
  declarations: [
    CalculatorsComponent
  ],
  imports: [
    CommonModule,
    CalculatorsRoutingModule
  ]
})
export class CalculatorsModule { }
