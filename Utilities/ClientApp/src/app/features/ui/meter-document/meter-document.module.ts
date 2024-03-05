import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeterDocumentTableComponent } from './meter-document-table/meter-document-table.component';
import { AddEditMeterDocumentComponent } from './add-edit-meter-document/add-edit-meter-document.component';
import { RouterModule } from '@angular/router';
import { routes } from './meter-document.routes';
import { HttpClient } from '@angular/common/http';
import { GenericRestService } from 'src/app/core/services/generic-rest.service';
import { MeterDocument } from 'src/app/Models/MeterDocument';
import { GenericComponentsModule } from 'src/app/shared/generic-components.module';



@NgModule({
  declarations: [
    MeterDocumentTableComponent,
    AddEditMeterDocumentComponent
  ],
  providers: [
    {
      provide: 'meterDocumentService',
      useFactory: (http: HttpClient) => {
        return new GenericRestService<MeterDocument>(http, {
          resourceEndpoint: 'api/MeterDocument'
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
export class MeterDocumentModule { }
