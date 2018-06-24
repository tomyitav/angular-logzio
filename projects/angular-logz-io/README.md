# angular-logz-io

Integrate logzio logging in your Angular app. 

## Installation

`npm i --save logzio-nodejs angular-logz-io`

## How to use in app code

In order to use `angular-logz-io` in your module, add the following definitions:

```js
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularLogzIoModule, LogzioOptions, AbstractLogger, AngularLogzIoService } from 'angular-logz-io';

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
    { provide: AbstractLogger, useClass: AngularLogzIoService},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

You can then inject the AbstractLogger service to use it in a component:

```js
constructor(private logz: AbstractLogger) {}
```

Logging is very simple to use:
```js
testService() {
  console.log('Logging to logz.io');
  this.logz.info('got event logzio');
}
```
