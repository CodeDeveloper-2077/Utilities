import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GenericRestService } from 'src/app/shared/services/generic-rest.service';
import { MeterLocation } from 'src/app/shared/Models/MeterLocation';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-edit-meter-location',
  templateUrl: './add-edit-meter-location.component.html',
  styleUrls: ['./add-edit-meter-location.component.css']
})
export class AddEditMeterLocationComponent {
  public meterLocationFormFields: string[] = ['name'];
  public entityType: string = "meter-location";
  constructor(@Inject('meterLocationService') protected meterLocationService: GenericRestService<MeterLocation>) { }
}
