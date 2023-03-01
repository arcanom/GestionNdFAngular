import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriquendfComponent } from './historiquendf.component';

describe('HistoriquendfComponent', () => {
  let component: HistoriquendfComponent;
  let fixture: ComponentFixture<HistoriquendfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoriquendfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoriquendfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
