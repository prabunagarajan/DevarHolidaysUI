import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditVehicleDetailsComponent } from './add-edit-vehicle-details.component';

describe('AddEditVehicleDetailsComponent', () => {
  let component: AddEditVehicleDetailsComponent;
  let fixture: ComponentFixture<AddEditVehicleDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditVehicleDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditVehicleDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
