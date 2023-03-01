import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesndfComponent } from './mesndf.component';

describe('MesndfComponent', () => {
  let component: MesndfComponent;
  let fixture: ComponentFixture<MesndfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesndfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MesndfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
