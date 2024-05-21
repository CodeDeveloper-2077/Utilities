import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeterTableComponent } from './meter-table/meter-table.component';
import { AddEditMeterComponent } from './add-edit-meter/add-edit-meter.component';
import { RouterModule } from '@angular/router';
import { routes } from './meter.routes';
import { HttpClient } from '@angular/common/http';
import { GenericRestService } from 'src/app/core/services/generic-rest.service';
import { MeterDto } from 'src/app/core/Models/MeterDto';
import { GenericComponentsModule } from 'src/app/shared/generic-components.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MeterTableComponent,
    AddEditMeterComponent
  ],
  providers: [
    {
      provide: 'meterService',
      useFactory: (http: HttpClient) => {
        return new GenericRestService<MeterDto>(http, {
          resourceEndpoint: 'api/Meter'
        })
      },
      deps: [HttpClient]
    }
  ],
  imports: [
    CommonModule,
    GenericComponentsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class MeterModule { }
