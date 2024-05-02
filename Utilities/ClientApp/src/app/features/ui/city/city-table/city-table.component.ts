import { Component, Inject, OnInit } from '@angular/core';
import { CityDto } from 'src/app/core/Models/CityDto';
import { GenericRestService } from 'src/app/core/services/generic-rest.service';

@Component({
  selector: 'app-city-table',
  templateUrl: './city-table.component.html',
  styleUrls: ['./city-table.component.css']
})
export class CityTableComponent implements OnInit {
  protected entityType: string = "citie";
  public headArray: string[] = ['id', 'name'];
  public cities: CityDto[] = [];
  
  constructor(@Inject('cityService') protected readonly cityService: GenericRestService<CityDto>) { }

  public ngOnInit(): void {
    this.cityService.getAll().subscribe(result => {
      this.cities = result;
    },
      error => console.error(error));
  }
}
