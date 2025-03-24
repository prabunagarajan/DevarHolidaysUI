import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatTableConfigurationComponent } from './mat-table-configuration.component';

describe('MatTableConfigurationComponent', () => {
  let component: MatTableConfigurationComponent;
  let fixture: ComponentFixture<MatTableConfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatTableConfigurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatTableConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
