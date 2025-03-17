import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTripDetailsAtComponent } from './view-trip-details-at.component';

describe('ViewTripDetailsAtComponent', () => {
  let component: ViewTripDetailsAtComponent;
  let fixture: ComponentFixture<ViewTripDetailsAtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewTripDetailsAtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTripDetailsAtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
