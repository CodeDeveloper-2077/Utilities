import { Component, Inject, OnInit } from '@angular/core';
import { MeterDocumentDto } from 'src/app/core/Models/MeterDocumentDto';
import { GenericRestService } from 'src/app/core/services/generic-rest.service';

@Component({
  selector: 'app-add-edit-meter-document',
  templateUrl: './add-edit-meter-document.component.html',
  styleUrls: ['./add-edit-meter-document.component.css']
})
export class AddEditMeterDocumentComponent {
  public meterDocumentFormFields: string[] = ['body'];
  public entityType: string = "meter-document";
  constructor(@Inject('meterDocumentService') protected meterDocumentService: GenericRestService<MeterDocumentDto>) { }
}
