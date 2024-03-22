import { Component, Inject, OnInit } from '@angular/core';
import { Apartment } from 'src/app/shared/Models/Apartment';
import { GenericRestService } from 'src/app/shared/services/generic-rest.service';

@Component({
  selector: 'app-apartment-table',
  templateUrl: './apartment-table.component.html',
  styleUrls: ['./apartment-table.component.css']
})
export class ApartmentTableComponent implements OnInit {
  public isNewDiv: boolean = false;
  protected entityType: string = "apartment";
  public headArray: string[] = ['id', 'relatedFamily', 'registeredCountPeople', 'apartmentNumber', 'houseNumber', 'buildingNumber', 'entranceNumber', 'receiptCode'];
  public apartments: Apartment[] = [];
  
  constructor(@Inject('apartmentService') protected readonly apartmentService: GenericRestService<Apartment>) { }

  public ngOnInit(): void {
    this.apartmentService.getAll().subscribe(result => {
      this.apartments = result;
    },
      error => console.error(error));
  }
}
