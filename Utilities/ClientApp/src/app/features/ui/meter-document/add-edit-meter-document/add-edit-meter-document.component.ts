import { Component, Inject, OnInit } from '@angular/core';
import { MeterDocument } from 'src/app/shared/Models/MeterDocument';
import { GenericRestService } from 'src/app/shared/services/generic-rest.service';

@Component({
  selector: 'app-add-edit-meter-document',
  templateUrl: './add-edit-meter-document.component.html',
  styleUrls: ['./add-edit-meter-document.component.css']
})
export class AddEditMeterDocumentComponent {
  public meterDocumentFormFields: string[] = ['body'];
  public entityType: string = "meter-document";
  constructor(@Inject('meterDocumentService') protected meterDocumentService: GenericRestService<MeterDocument>) { }
}
