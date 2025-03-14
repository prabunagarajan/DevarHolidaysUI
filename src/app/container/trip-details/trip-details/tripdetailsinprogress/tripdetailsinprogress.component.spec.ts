import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripdetailsinprogressComponent } from './tripdetailsinprogress.component';

describe('TripdetailsinprogressComponent', () => {
  let component: TripdetailsinprogressComponent;
  let fixture: ComponentFixture<TripdetailsinprogressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripdetailsinprogressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripdetailsinprogressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
