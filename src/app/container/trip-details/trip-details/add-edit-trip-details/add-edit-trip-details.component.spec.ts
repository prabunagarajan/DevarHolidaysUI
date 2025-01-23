import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditTripDetailsComponent } from './add-edit-trip-details.component';

describe('AddEditTripDetailsComponent', () => {
  let component: AddEditTripDetailsComponent;
  let fixture: ComponentFixture<AddEditTripDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditTripDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditTripDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
