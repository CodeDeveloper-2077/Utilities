import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApartmentDto } from 'src/app/core/Models/ApartmentDto';
import { GenericRestService } from 'src/app/core/services/generic-rest.service';

@Component({
  selector: 'app-apartment-table',
  templateUrl: './apartment-table.component.html',
  styleUrls: ['./apartment-table.component.css']
})
export class ApartmentTableComponent implements OnInit {
  public apartments: ApartmentDto[] = [];
  
  constructor(@Inject('apartmentService') private readonly apartmentService: GenericRestService<ApartmentDto>,
              private readonly router: Router) { }

  public ngOnInit(): void {
    this.apartmentService.getAll().subscribe(result => {
      this.apartments = result;
    },
      error => console.error(error));
  }

  public addBtn(): void {
    this.router.navigate(['/apartments/add']);
  }

  public updateBtn(id: number): void {
    this.router.navigate([`/apartments/edit/`, id]);
  }

  public removeBtn(id: number): void {
    if(confirm("Are you sure about removing apartment?")) {
      this.apartmentService.delete(id).subscribe(result => console.log(`${result} has been deleted`),
        error => console.error(error));
    }
  }
}