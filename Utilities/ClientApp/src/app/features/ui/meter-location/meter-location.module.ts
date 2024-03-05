import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeterLocationTableComponent } from './meter-location-table/meter-location-table.component';
import { RouterModule } from '@angular/router';
import { routes } from './meter-location.routes';
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AddEditMeterLocationComponent } from './add-edit-meter-location/add-edit-meter-location.component';
import { GenericComponentsModule } from 'src/app/shared/generic-components.module';
import { GenericRestService } from 'src/app/core/services/generic-rest.service';
import { MeterLocation } from 'src/app/Models/MeterLocation';

@NgModule({
  declarations: [
    MeterLocationTableComponent,
    AddEditMeterLocationComponent
  ],
  imports: [
    CommonModule,
    GenericComponentsModule,
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
