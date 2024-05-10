import { Component, Inject, OnInit } from '@angular/core';
import { ApartmentDto } from 'src/app/core/Models/ApartmentDto';
import { GenericRestService } from 'src/app/core/services/generic-rest.service';

@Component({
  selector: 'app-apartment-table',
  templateUrl: './apartment-table.component.html',
  styleUrls: ['./apartment-table.component.css']
})
export class ApartmentTableComponent implements OnInit {
  public isNewDiv: boolean = false;
  protected entityType: string = "apartment";
  public headArray: string[] = ['id', 'relatedFamily', 'registeredCountPeople', 'apartmentNumber', 'houseNumber', 'buildingNumber', 'entranceNumber', 'receiptCode', 'streetName'];
  public apartments: ApartmentDto[] = [];
  
  constructor(@Inject('apartmentService') protected readonly apartmentService: GenericRestService<ApartmentDto>) { }

  public ngOnInit(): void {
    this.apartmentService.getAll().subscribe(result => {
      this.apartments = result;
    },
      error => console.error(error));
  }
}
