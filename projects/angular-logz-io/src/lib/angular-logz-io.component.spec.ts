import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularLogzIoComponent } from './angular-logz-io.component';

describe('AngularLogzIoComponent', () => {
  let component: AngularLogzIoComponent;
  let fixture: ComponentFixture<AngularLogzIoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularLogzIoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularLogzIoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
