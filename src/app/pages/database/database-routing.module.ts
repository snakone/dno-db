import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatabaseComponent } from './database.component';
import { DbMaterialsComponent } from './components/db-materials/db-materials.component';

const routes: Routes = [
  {
    path: '',
    component: DatabaseComponent,
  },
  {
    path: 'materials',
    component: DbMaterialsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DatabaseRoutingModule { }
