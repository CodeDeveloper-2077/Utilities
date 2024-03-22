import { Component, Inject, OnInit } from '@angular/core';
import { Country } from 'src/app/shared/Models/Country';
import { GenericRestService } from 'src/app/shared/services/generic-rest.service';

@Component({
  selector: 'app-add-edit-country',
  templateUrl: './add-edit-country.component.html',
  styleUrls: ['./add-edit-country.component.css']
})
export class AddEditCountryComponent {
  public countryFormFields: string[] = ['name'];
  
  public entityType: string = "country";
  constructor(@Inject('countryService') protected countryService: GenericRestService<Country>) { }
}
