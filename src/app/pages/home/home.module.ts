import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { FeaturesComponent } from './components/features/features.component';
import { IntroComponent } from './components/intro/intro.component';
import { HomeGuidesComponent } from './components/guides/home-guides.component';

@NgModule({
  declarations: [
    HomeComponent,
    FeaturesComponent,
    IntroComponent,
    HomeGuidesComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})

export class HomeModule { }
