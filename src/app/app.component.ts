import {Component} from '@angular/core';
import {AbstractLogger} from 'angular-logz-io';

@Component({
  selector: 'ali-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private logz: AbstractLogger) {
  }

  title = 'angular-logz-io';

  testService() {
    console.log('Logging to logz.io');
    this.logz.info('got event logzio');
  }
}
