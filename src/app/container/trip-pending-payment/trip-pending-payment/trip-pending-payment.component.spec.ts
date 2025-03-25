import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripPendingPaymentComponent } from './trip-pending-payment.component';

describe('TripPendingPaymentComponent', () => {
  let component: TripPendingPaymentComponent;
  let fixture: ComponentFixture<TripPendingPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripPendingPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripPendingPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
