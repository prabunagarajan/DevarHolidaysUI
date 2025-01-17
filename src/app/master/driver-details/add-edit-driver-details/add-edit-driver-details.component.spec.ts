import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditDriverDetailsComponent } from './add-edit-driver-details.component';

describe('AddEditDriverDetailsComponent', () => {
  let component: AddEditDriverDetailsComponent;
  let fixture: ComponentFixture<AddEditDriverDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditDriverDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditDriverDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
