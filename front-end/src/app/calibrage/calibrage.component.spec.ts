import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalibrageComponent } from './calibrage.component';

describe('CalibrageComponent', () => {
  let component: CalibrageComponent;
  let fixture: ComponentFixture<CalibrageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalibrageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalibrageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
