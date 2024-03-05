import { Component, Inject, OnInit } from '@angular/core';
import { Apartment } from 'src/app/Models/Apartment';
import { GenericRestService } from 'src/app/core/services/generic-rest.service';

@Component({
  selector: 'app-add-edit-apartment',
  templateUrl: './add-edit-apartment.component.html',
  styleUrls: ['./add-edit-apartment.component.css']
})
export class AddEditApartmentComponent {
  public apartmentFormFields: string[] = ['relatedFamily', 'registeredCountPeople', 'apartmentNumber', 'houseNumber', 'buildingNumber', 'entranceNumber', 'receiptCode', 'meterDocumentId', 'locationId'];
  
  public entityType: string = "apartment";
  constructor(@Inject('apartmentService') protected apartmentService: GenericRestService<Apartment>) { }
}
