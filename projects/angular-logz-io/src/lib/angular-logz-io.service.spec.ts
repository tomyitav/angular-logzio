import { TestBed, inject } from '@angular/core/testing';

import { AngularLogzIoService } from './angular-logz-io.service';

describe('AngularLogzIoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AngularLogzIoService]
    });
  });

  it('should be created', inject([AngularLogzIoService], (service: AngularLogzIoService) => {
    expect(service).toBeTruthy();
  }));
});
