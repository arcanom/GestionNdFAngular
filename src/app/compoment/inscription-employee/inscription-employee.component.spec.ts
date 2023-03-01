import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionEmployeeComponent } from './inscription-employee.component';

describe('InscriptionEmployeeComponent', () => {
  let component: InscriptionEmployeeComponent;
  let fixture: ComponentFixture<InscriptionEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscriptionEmployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InscriptionEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
