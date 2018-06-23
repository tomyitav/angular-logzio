import {Component} from '@angular/core';
import {AngularLogzIoService} from 'angular-logz-io';

@Component({
  selector: 'ali-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private logz: AngularLogzIoService) {
  }

  title = 'angular-logz-io';

  testService() {
    this.logz.info('got event logzio');
  }
}
