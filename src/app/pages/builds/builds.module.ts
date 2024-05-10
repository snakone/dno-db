import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuildsRoutingModule } from './builds-routing.module';
import { BuildsComponent } from './builds.component';
import { SkillBuildComponent } from './components/skill-build/skill-build.component';

@NgModule({
  declarations: [
    BuildsComponent,
    SkillBuildComponent
  ],
  imports: [
    CommonModule,
    BuildsRoutingModule
  ]
})

export class BuildsModule { }
