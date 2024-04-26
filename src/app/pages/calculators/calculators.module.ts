import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalculatorsRoutingModule } from './calculators-routing.module';
import { CalculatorsComponent } from './calculators.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CalculatorsComponent
  ],
  imports: [
    CommonModule,
    CalculatorsRoutingModule,
    FormsModule
  ]
})
export class CalculatorsModule { }
