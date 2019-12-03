import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DummyemployeeListComponent } from './dummyemployee-list.component';

describe('DummyemployeeListComponent', () => {
  let component: DummyemployeeListComponent;
  let fixture: ComponentFixture<DummyemployeeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DummyemployeeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DummyemployeeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
