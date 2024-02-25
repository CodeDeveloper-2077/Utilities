import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditCountryComponent } from './add-edit-country/add-edit-country.component';
import { CountryTableComponent } from './country-table/country-table.component';
import { GenericComponentsModule } from '../generic-components/generic-components.module';
import { RouterModule } from '@angular/router';
import { routes } from './country.routes';
import { HttpClient } from '@angular/common/http';
import { GenericRestService } from '../services/generic-rest.service';
import { Country } from '../Models/Country';



@NgModule({
  declarations: [
    AddEditCountryComponent,
    CountryTableComponent
  ],
  providers: [
    {
      provide: 'countryService',
      useFactory: (http: HttpClient) => {
        return new GenericRestService<Country>(http, {
          resourceEndpoint: 'api/Country'
        })
      },
      deps: [HttpClient]
    }
  ],
  imports: [
    CommonModule,
    GenericComponentsModule,
    RouterModule.forChild(routes)
  ]
})
export class CountryModule { }
