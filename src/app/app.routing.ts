import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module')
        .then(mod => mod.HomeModule), data: { name: 'Home' }
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./pages/about/about.module')
        .then(mod => mod.AboutModule), data: { name: 'About' }
  },
  {
    path: 'calculators',
    loadChildren: () =>
      import('./pages/calculators/calculators.module')
        .then(mod => mod.CalculatorsModule), data: { name: 'Calculators' }
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
