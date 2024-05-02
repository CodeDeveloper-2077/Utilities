import { Component, Inject, OnInit } from '@angular/core';
import { CountryDto } from 'src/app/core/Models/CountryDto';
import { GenericRestService } from 'src/app/core/services/generic-rest.service';

@Component({
  selector: 'app-country-table',
  templateUrl: './country-table.component.html',
  styleUrls: ['./country-table.component.css']
})
export class CountryTableComponent implements OnInit {
  protected entityType: string = "country";
  public headArray: string[] = ['id', 'name'];
  public countries: CountryDto[] = [];
  
  constructor(@Inject('countryService') protected readonly countryService: GenericRestService<CountryDto>) { }

  public ngOnInit(): void {
    this.countryService.getAll().subscribe(result => {
      this.countries = result;
    },
      error => console.error(error));
  }
}
