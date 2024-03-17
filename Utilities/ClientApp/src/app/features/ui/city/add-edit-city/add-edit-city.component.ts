import { Component, Inject, OnInit } from '@angular/core';
import { City } from 'src/app/Models/City';
import { GenericRestService } from 'src/app/core/services/generic-rest.service';

@Component({
  selector: 'app-add-edit-city',
  templateUrl: './add-edit-city.component.html',
  styleUrls: ['./add-edit-city.component.css']
})
export class AddEditCityComponent {
  public cityFormFields: string[] = ['name'];
  
  public entityType: string = "city";
  constructor(@Inject('cityService') protected cityService: GenericRestService<City>) { }
}
