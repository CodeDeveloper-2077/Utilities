import { Component, Inject, OnInit } from '@angular/core';
import { Country } from 'src/app/Models/Country';
import { GenericRestService } from 'src/app/core/services/generic-rest.service';

@Component({
  selector: 'app-country-table',
  templateUrl: './country-table.component.html',
  styleUrls: ['./country-table.component.css']
})
export class CountryTableComponent implements OnInit {
  protected entityType: string = "country";
  public headArray: string[] = ['name'];
  public countries: Country[] = [];
  
  constructor(@Inject('countryService') protected readonly countryService: GenericRestService<Country>) { }

  public ngOnInit(): void {
    this.countryService.getAll().subscribe(result => {
      this.countries = result;
    },
      error => console.error(error));
  }
}
