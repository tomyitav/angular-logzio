import { Injectable } from '@angular/core';
import * as logzio from 'logzio-nodejs';

export abstract class AbstractLogger {
  protected abstract log(level: string, message: string);

  public error(message: string) {
    this.log('ERROR', message);
  }

  public warn(message: string) {
    this.log('WARN', message);
  }

  public info(message: string) {
    this.log('INFO', message);
  }

  public debug(message: string) {
    this.log('DEBUG', message);
  }

  public verbose(message: string) {
    this.log('VERBOSE', message);
  }
}

export class LogzioOptions {
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AngularLogzIoService extends AbstractLogger {

  private _logger;
  constructor(private options?: LogzioOptions) {
    super();
    this.initializeLogger();
  }

  protected log(level: string, message: string) {
    this._logger.log(level + ': ' + message);
  }

  private initializeLogger() {
    const token = this.options.token || '';
    this._logger = logzio.createLogger({
      token
    });
  }
}
