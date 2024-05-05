import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { FeaturesComponent } from './components/features/features.component';
import { IntroComponent } from './components/intro/intro.component';
import { HomeGuidesComponent } from './components/guides/home-guides.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HomeComponent,
    FeaturesComponent,
    IntroComponent,
    HomeGuidesComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    RouterModule
  ]
})

export class HomeModule { }
