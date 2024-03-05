import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditMeterLocationComponent } from './add-edit-meter-location.component';

describe('AddEditMeterLocationComponent', () => {
  let component: AddEditMeterLocationComponent;
  let fixture: ComponentFixture<AddEditMeterLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditMeterLocationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditMeterLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
