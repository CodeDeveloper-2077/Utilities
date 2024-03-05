import { Component, Inject, OnInit } from '@angular/core';
import { Apartment } from 'src/app/Models/Apartment';
import { GenericRestService } from 'src/app/core/services/generic-rest.service';

@Component({
  selector: 'app-apartment-table',
  templateUrl: './apartment-table.component.html',
  styleUrls: ['./apartment-table.component.css']
})
export class ApartmentTableComponent implements OnInit {
  protected entityType: string = "apartment";
  public headArray: string[] = [];
  public apartments: Apartment[] = [];
  
  constructor(@Inject('apartmentService') protected readonly apartmentService: GenericRestService<Apartment>) { }

  public ngOnInit(): void {
    this.apartmentService.getAll().subscribe(result => {
      this.apartments = result;
      this.headArray = Object.keys(this.apartments[0]).slice(1);
    },
      error => console.error(error));
  }
}
