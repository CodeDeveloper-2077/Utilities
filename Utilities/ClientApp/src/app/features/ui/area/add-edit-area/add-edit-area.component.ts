import { Component, Inject, OnInit } from '@angular/core';
import { Area } from 'src/app/Models/Area';
import { GenericRestService } from 'src/app/core/services/generic-rest.service';

@Component({
  selector: 'app-add-edit-area',
  templateUrl: './add-edit-area.component.html',
  styleUrls: ['./add-edit-area.component.css']
})
export class AddEditAreaComponent {
  public areaFormFields: string[] = ['countryId', 'name'];
  
  public entityType: string = "area";
  constructor(@Inject('areaService') protected areaService: GenericRestService<Area>) { }
}
