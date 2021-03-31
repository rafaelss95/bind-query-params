import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BIND_QUERY_PARAMS_OPTIONS } from '@ngneat/bind-query-params';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ReactiveFormsModule, AppRoutingModule],
  providers: [
    {
      provide: BIND_QUERY_PARAMS_OPTIONS,
      useValue: {
        ignoreInvalidForm: true,
        windowRef: window,
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
