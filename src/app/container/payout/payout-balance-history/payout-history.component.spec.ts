import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { payoutHistoryComponent } from './payout-history.component';

describe('payoutHistoryComponent', () => {
  let component: payoutHistoryComponent;
  let fixture: ComponentFixture<payoutHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ payoutHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(payoutHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
