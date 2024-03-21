import { Component, Inject, OnInit } from '@angular/core';
import { Meter } from 'src/app/shared/Models/Meter';
import { GenericRestService } from 'src/app/core/services/generic-rest.service';

@Component({
  selector: 'app-add-edit-meter',
  templateUrl: './add-edit-meter.component.html',
  styleUrls: ['./add-edit-meter.component.css']
})
export class AddEditMeterComponent {
  public meterFormFields: string[] = ['meterName', 'meterNumber', 'prevCheckDate', 'nextCheckDate', 'apartmentId', 'meterLocationId'];
  public entityType: string = "meter-document";
  constructor(@Inject('meterService') protected meterService: GenericRestService<Meter>) { }
}
