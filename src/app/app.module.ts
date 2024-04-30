import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { CoreModule } from '@core/core.module';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { HeaderModule } from '@layout/header/header.module';
import { FooterModule } from '@layout/footer/footer.module';
import { SnippetsModule } from '@shared/snippets/snippets.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CoreModule,
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    FooterModule,
    SnippetsModule,
    StoreModule.forRoot({}, {
      runtimeChecks: {
        strictStateImmutability: false,
        strictActionImmutability: false
      }
    }),
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent]
})

export class AppModule { }
