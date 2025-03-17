import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripDetailsAtComponent } from './trip-details-at.component';

describe('TripDetailsAtComponent', () => {
  let component: TripDetailsAtComponent;
  let fixture: ComponentFixture<TripDetailsAtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripDetailsAtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripDetailsAtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
