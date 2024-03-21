import { Component, Inject, OnInit } from '@angular/core';
import { City } from 'src/app/shared/Models/City';
import { GenericRestService } from 'src/app/core/services/generic-rest.service';

@Component({
  selector: 'app-city-table',
  templateUrl: './city-table.component.html',
  styleUrls: ['./city-table.component.css']
})
export class CityTableComponent implements OnInit {
  protected entityType: string = "citie";
  public headArray: string[] = ['id', 'name'];
  public cities: City[] = [];
  
  constructor(@Inject('cityService') protected readonly cityService: GenericRestService<City>) { }

  public ngOnInit(): void {
    this.cityService.getAll().subscribe(result => {
      this.cities = result;
    },
      error => console.error(error));
  }
}
