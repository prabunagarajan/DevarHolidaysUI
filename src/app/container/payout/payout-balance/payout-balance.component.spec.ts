import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayoutBalanceComponent } from './payout-balance.component';

describe('PayoutBalanceComponent', () => {
  let component: PayoutBalanceComponent;
  let fixture: ComponentFixture<PayoutBalanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayoutBalanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayoutBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
