import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollTopComponent } from './scroll-top/scroll-top.component';
import { DirectivesModule } from '@shared/directives/directives.module';

@NgModule({
  declarations: [
    ScrollTopComponent
  ],
  imports: [
    CommonModule,
    DirectivesModule
  ],
  exports: [
    ScrollTopComponent
  ]
})

export class SnippetsModule { }
