import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header.component';
import { DirectivesModule } from '@directives/directives.module';

const Material = [
  MatMenuModule
];

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    ...Material,
    RouterModule,
    DirectivesModule
  ],
  exports: [
    HeaderComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class HeaderModule { }
