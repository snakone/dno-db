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
    path: 'database',
    loadChildren: () =>
      import('./pages/database/database.module')
        .then(mod => mod.DatabaseModule), data: { name: 'Database' }
  },
  {
    path: 'guides',
    loadChildren: () =>
      import('./pages/guides/guides.module')
        .then(mod => mod.GuidesModule), data: { name: 'Guides' }
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
    path: 'builds',
    loadChildren: () =>
      import('./pages/builds/builds.module')
        .then(mod => mod.BuildsModule), data: { name: 'Builds' }
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
