import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { MatMenuModule } from '@angular/material/menu';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

const Material = [
  MatMenuModule
];

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    ...Material,
    RouterModule
  ],
  exports: [
    HeaderComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class HeaderModule { }
