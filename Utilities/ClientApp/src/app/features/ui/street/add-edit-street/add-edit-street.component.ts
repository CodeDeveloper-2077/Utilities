import { Component, Inject, OnInit } from '@angular/core';
import { Street } from 'src/app/shared/Models/Street';
import { GenericRestService } from 'src/app/core/services/generic-rest.service';

@Component({
  selector: 'app-add-edit-street',
  templateUrl: './add-edit-street.component.html',
  styleUrls: ['./add-edit-street.component.css']
})
export class AddEditStreetComponent {
  public streetFormFields: string[] = ['name'];
  public entityType: string = "street";
  constructor(@Inject('streetService') protected streetService: GenericRestService<Street>) { }
}
