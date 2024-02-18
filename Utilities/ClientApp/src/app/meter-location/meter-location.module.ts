import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeterLocationTableComponent } from './meter-location-table/meter-location-table.component';
import { RouterModule } from '@angular/router';
import { routes } from './meter-location.routes';
import { GenericRestService } from '../services/generic-rest.service';
import { HttpClient } from '@angular/common/http';
import { MeterLocation } from '../Models/MeterLocation';
import { ReactiveFormsModule } from '@angular/forms';
import { AddEditMeterLocationComponent } from './add-edit-meter-location/add-edit-meter-location.component';
import { GenericTableComponent } from '../generic-table/generic-table.component';

@NgModule({
  declarations: [
    MeterLocationTableComponent,
    GenericTableComponent,
    AddEditMeterLocationComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    {
      provide: 'meterLocationService',
      useFactory: (http: HttpClient) => {
        return new GenericRestService<MeterLocation>(http, {
          resourceEndpoint: 'api/MeterLocation'
        })
      },
      deps: [HttpClient]
    }
  ],
  exports: [RouterModule]
})
export class MeterLocationModule { }
