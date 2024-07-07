import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApartmentTableComponent } from './apartment-table/apartment-table.component';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { routes } from './apartment.routes';
import { AddEditApartmentComponent } from './add-edit-apartment/add-edit-apartment.component';
import { GenericRestService } from 'src/app/core/services/generic-rest.service';
import { ApartmentDto } from 'src/app/core/Models/ApartmentDto';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    ApartmentTableComponent,
    AddEditApartmentComponent
  ],
  providers: [
    {
      provide: 'apartmentService',
      useFactory: (http: HttpClient) => {
        return new GenericRestService<ApartmentDto>(http, {
          resourceEndpoint: 'Apartment'
        })
      },
      deps: [HttpClient]
    }
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ApartmentModule { }
