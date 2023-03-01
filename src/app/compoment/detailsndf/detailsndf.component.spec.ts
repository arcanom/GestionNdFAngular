import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsndfComponent } from './detailsndf.component';

describe('DetailsndfComponent', () => {
  let component: DetailsndfComponent;
  let fixture: ComponentFixture<DetailsndfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsndfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsndfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
