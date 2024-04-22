import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { FeaturesComponent } from './components/features/features.component';
import { IntroComponent } from './components/intro/intro.component';

@NgModule({
  declarations: [
    HomeComponent,
    FeaturesComponent,
    IntroComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})

export class HomeModule { }
