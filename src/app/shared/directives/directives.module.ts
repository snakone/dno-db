import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollTopDirective } from './scroll-top.directive';

@NgModule({
  declarations: [
    ScrollTopDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ScrollTopDirective
  ]
})

export class DirectivesModule { }
