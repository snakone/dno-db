import { HttpClientModule } from '@angular/common/http';
import { NgModule, Optional, SkipSelf, isDevMode } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreEffects, appReducers } from './ngrx/ngrx.index';
import { HttpService } from './services/http/http.service';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000'
    }),
    StoreModule.forFeature('AppState', appReducers),
    EffectsModule.forRoot([...StoreEffects]),
  ],
  providers: [
    HttpService
  ],
})

export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded.');
    }
  }
}