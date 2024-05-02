import { Component, Inject, OnInit } from '@angular/core';
import { StreetDto } from 'src/app/core/Models/StreetDto';
import { GenericRestService } from 'src/app/core/services/generic-rest.service';

@Component({
  selector: 'app-add-edit-street',
  templateUrl: './add-edit-street.component.html',
  styleUrls: ['./add-edit-street.component.css']
})
export class AddEditStreetComponent {
  public streetFormFields: string[] = ['name'];
  public entityType: string = "street";
  constructor(@Inject('streetService') protected streetService: GenericRestService<StreetDto>) { }
}
