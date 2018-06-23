import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularLogzIoModule, LogzioOptions } from 'angular-logz-io';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularLogzIoModule
  ],
  providers: [
    { provide: LogzioOptions, useValue: { token: 'YOUR_LOGZIO_TOKEN' }},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
