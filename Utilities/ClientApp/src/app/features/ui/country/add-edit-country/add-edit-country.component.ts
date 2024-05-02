import { Component, Inject, OnInit } from '@angular/core';
import { CountryDto } from 'src/app/core/Models/CountryDto';
import { GenericRestService } from 'src/app/core/services/generic-rest.service';

@Component({
  selector: 'app-add-edit-country',
  templateUrl: './add-edit-country.component.html',
  styleUrls: ['./add-edit-country.component.css']
})
export class AddEditCountryComponent {
  public countryFormFields: string[] = ['name'];
  
  public entityType: string = "country";
  constructor(@Inject('countryService') protected countryService: GenericRestService<CountryDto>) { }
}
