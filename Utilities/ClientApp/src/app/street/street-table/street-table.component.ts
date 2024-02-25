import { Component, Inject, OnInit } from '@angular/core';
import { Street } from 'src/app/Models/Street';
import { GenericRestService } from 'src/app/services/generic-rest.service';

@Component({
  selector: 'app-street-table',
  templateUrl: './street-table.component.html',
  styleUrls: ['./street-table.component.css']
})
export class StreetTableComponent implements OnInit {
  protected entityType: string = "street";
  public headArray: string[] = ['name', 'cityId', 'apartmentId'];
  public streets: Street[] = [];
  
  constructor(@Inject('streetService') protected readonly streetService: GenericRestService<Street>) { }

  public ngOnInit(): void {
    this.streetService.getAll().subscribe(result => {
      this.streets = result;
    }, error => console.error(error));
  }
}
