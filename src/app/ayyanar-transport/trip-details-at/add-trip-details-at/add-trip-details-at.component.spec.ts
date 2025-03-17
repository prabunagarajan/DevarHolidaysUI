import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTripDetailsAtComponent } from './add-trip-details-at.component';

describe('AddTripDetailsAtComponent', () => {
  let component: AddTripDetailsAtComponent;
  let fixture: ComponentFixture<AddTripDetailsAtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTripDetailsAtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTripDetailsAtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
