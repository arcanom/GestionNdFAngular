import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraitementndfComponent } from './traitementndf.component';

describe('TraitementndfComponent', () => {
  let component: TraitementndfComponent;
  let fixture: ComponentFixture<TraitementndfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraitementndfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TraitementndfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
