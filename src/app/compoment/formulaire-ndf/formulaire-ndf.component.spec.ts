import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireNdfComponent } from './formulaire-ndf.component';

describe('FormulaireNdfComponent', () => {
  let component: FormulaireNdfComponent;
  let fixture: ComponentFixture<FormulaireNdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireNdfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulaireNdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
