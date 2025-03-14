import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripdeatilsforwardComponent } from './tripdeatilsforward.component';

describe('TripdeatilsforwardComponent', () => {
  let component: TripdeatilsforwardComponent;
  let fixture: ComponentFixture<TripdeatilsforwardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripdeatilsforwardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripdeatilsforwardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
