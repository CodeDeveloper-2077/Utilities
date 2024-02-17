import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeterLocationTableComponent } from './meter-location-table.component';

describe('MeterLocationTableComponent', () => {
  let component: MeterLocationTableComponent;
  let fixture: ComponentFixture<MeterLocationTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeterLocationTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeterLocationTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
