import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityTableComponent } from './city-table/city-table.component';
import { AddEditCityComponent } from './add-edit-city/add-edit-city.component';
import { RouterModule } from '@angular/router';
import { routes } from './city.routes';
import { HttpClient } from '@angular/common/http';
import { GenericRestService } from 'src/app/shared/services/generic-rest.service';
import { City } from 'src/app/shared/Models/City';
import { GenericComponentsModule } from 'src/app/shared/generic-components.module';


@NgModule({
  declarations: [
    CityTableComponent,
    AddEditCityComponent
  ],
  providers: [
    {
      provide: 'cityService',
      useFactory: (http: HttpClient) => {
        return new GenericRestService<City>(http, {
          resourceEndpoint: 'api/City'
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
export class CityModule { }
