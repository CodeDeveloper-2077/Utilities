import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApartmentTableComponent } from './apartment-table/apartment-table.component';
import { HttpClient } from '@angular/common/http';
import { GenericRestService } from '../services/generic-rest.service';
import { Apartment } from '../Models/Apartment';
import { GenericComponentsModule } from '../generic-components/generic-components.module';
import { RouterModule } from '@angular/router';
import { routes } from './apartment.routes';
import { AddEditApartmentComponent } from './add-edit-apartment/add-edit-apartment.component';



@NgModule({
  declarations: [
    ApartmentTableComponent,
    AddEditApartmentComponent
  ],
  providers: [
    {
      provide: 'apartmentService',
      useFactory: (http: HttpClient) => {
        return new GenericRestService<Apartment>(http, {
          resourceEndpoint: 'api/Apartment'
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
export class ApartmentModule { }
