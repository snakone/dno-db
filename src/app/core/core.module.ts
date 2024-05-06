import { HttpClientModule } from '@angular/common/http';
import { NgModule, Optional, SkipSelf, isDevMode } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreEffects, appReducers } from './ngrx/ngrx.index';
import { HttpService } from './services/http/http.service';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { CORE_MODULE_CONSTANTS } from './core.module.config';
import { StorageModule } from './services/storage/storage.module';

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
    NgxWebstorageModule.forRoot(CORE_MODULE_CONSTANTS.WEBSTORAGE_CONFIG),
    StorageModule
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