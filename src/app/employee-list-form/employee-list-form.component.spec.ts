import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeListFormComponent } from './employee-list-form.component';

describe('EmployeeListFormComponent', () => {
  let component: EmployeeListFormComponent;
  let fixture: ComponentFixture<EmployeeListFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeListFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeListFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
