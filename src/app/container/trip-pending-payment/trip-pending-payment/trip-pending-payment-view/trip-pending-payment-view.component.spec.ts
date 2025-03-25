import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripPendingPaymentViewComponent } from './trip-pending-payment-view.component';

describe('TripPendingPaymentViewComponent', () => {
  let component: TripPendingPaymentViewComponent;
  let fixture: ComponentFixture<TripPendingPaymentViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripPendingPaymentViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripPendingPaymentViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
