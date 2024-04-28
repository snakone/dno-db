import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { SnippetsModule } from '@shared/snippets/snippets.module';

@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    CommonModule,
    SnippetsModule
  ],
  exports: [
    FooterComponent
  ]
})

export class FooterModule { }
