import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDriverPaymentComponent } from './view-driver-payment.component';

describe('ViewDriverPaymentComponent', () => {
  let component: ViewDriverPaymentComponent;
  let fixture: ComponentFixture<ViewDriverPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewDriverPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDriverPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
