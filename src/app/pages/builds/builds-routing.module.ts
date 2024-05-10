import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuildsComponent } from './builds.component';
import { SkillBuildComponent } from './components/skill-build/skill-build.component';

const routes: Routes = [
  {
    path: '',
    component: BuildsComponent,
    children: [
      {
        path: 'skills',
        component: SkillBuildComponent
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class BuildsRoutingModule { }
