import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { SnippetsModule } from '@shared/snippets/snippets.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    CommonModule,
    SnippetsModule,
    RouterModule
  ],
  exports: [
    FooterComponent
  ]
})

export class FooterModule { }
