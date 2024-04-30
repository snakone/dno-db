import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorsComponent } from './calculators.component';
import { EnhancementComponent } from './components/enhancement/enhancement.component';

const routes: Routes = [
  {
    path: '',
    component: CalculatorsComponent,
    children: [
      {
        path: 'enhancement',
        component: EnhancementComponent
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CalculatorsRoutingModule { }
