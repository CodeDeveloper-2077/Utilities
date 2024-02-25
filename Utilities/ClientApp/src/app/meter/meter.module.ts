import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeterTableComponent } from './meter-table/meter-table.component';
import { AddEditMeterComponent } from './add-edit-meter/add-edit-meter.component';
import { GenericComponentsModule } from '../generic-components/generic-components.module';
import { RouterModule } from '@angular/router';
import { routes } from './meter.routes';
import { HttpClient } from '@angular/common/http';
import { GenericRestService } from '../services/generic-rest.service';
import { Meter } from '../Models/Meter';



@NgModule({
  declarations: [
    MeterTableComponent,
    AddEditMeterComponent
  ],
  providers: [
    {
      provide: 'meterService',
      useFactory: (http: HttpClient) => {
        return new GenericRestService<Meter>(http, {
          resourceEndpoint: 'api/Meter'
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
export class MeterModule { }
