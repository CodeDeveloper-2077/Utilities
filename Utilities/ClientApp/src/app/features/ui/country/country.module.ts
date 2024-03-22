import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditCountryComponent } from './add-edit-country/add-edit-country.component';
import { CountryTableComponent } from './country-table/country-table.component';
import { RouterModule } from '@angular/router';
import { routes } from './country.routes';
import { HttpClient } from '@angular/common/http';
import { GenericRestService } from 'src/app/shared/services/generic-rest.service';
import { Country } from 'src/app/shared/Models/Country';
import { GenericComponentsModule } from 'src/app/shared/generic-components.module';



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
