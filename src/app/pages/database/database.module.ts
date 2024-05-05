import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';

import { DatabaseRoutingModule } from './database-routing.module';
import { DatabaseComponent } from './database.component';
import { MatSortModule } from '@angular/material/sort';
import { FormsModule } from '@angular/forms';
import { DbMaterialsComponent } from './components/db-materials/db-materials.component';
import { RouterModule } from '@angular/router';

const Material = [
  MatPaginatorModule,
  MatTableModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatInputModule
]

@NgModule({
  declarations: [
    DatabaseComponent,
    DbMaterialsComponent
  ],
  imports: [
    CommonModule,
    DatabaseRoutingModule,
    FormsModule,
    RouterModule,
    ...Material
  ]
})

export class DatabaseModule { }
