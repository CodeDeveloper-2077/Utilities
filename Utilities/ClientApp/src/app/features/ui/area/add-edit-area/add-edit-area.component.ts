import { Component, Inject, OnInit } from '@angular/core';
import { AreaDto } from 'src/app/core/Models/AreaDto';
import { GenericRestService } from 'src/app/core/services/generic-rest.service';

@Component({
  selector: 'app-add-edit-area',
  templateUrl: './add-edit-area.component.html',
  styleUrls: ['./add-edit-area.component.css']
})
export class AddEditAreaComponent {
  public areaFormFields: string[] = ['name'];
  
  public entityType: string = "area";
  constructor(@Inject('areaService') protected areaService: GenericRestService<AreaDto>) { }
}
