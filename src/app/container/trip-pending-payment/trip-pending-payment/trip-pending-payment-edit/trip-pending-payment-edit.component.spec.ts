import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripPendingPaymentEditComponent } from './trip-pending-payment-edit.component';

describe('TripPendingPaymentEditComponent', () => {
  let component: TripPendingPaymentEditComponent;
  let fixture: ComponentFixture<TripPendingPaymentEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripPendingPaymentEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripPendingPaymentEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
