import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavDirective } from './sticky-nav.directive';

@NgModule({
  declarations: [
    NavDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavDirective
  ]
})

export class DirectivesModule { }
