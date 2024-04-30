import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CalculatorsRoutingModule } from './calculators-routing.module';
import { CalculatorsComponent } from './calculators.component';
import { EnhancementComponent } from './components/enhancement/enhancement.component';
import { CalculatorAccessModule } from '@core/ngrx/calculators/data-access/calculator-access.module';

@NgModule({
  declarations: [
    CalculatorsComponent,
    EnhancementComponent
  ],
  imports: [
    CommonModule,
    CalculatorsRoutingModule,
    FormsModule,
    CalculatorAccessModule
  ]
})

export class CalculatorsModule { }
