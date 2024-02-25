import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StreetTableComponent } from './street-table/street-table.component';
import { AddEditStreetComponent } from './add-edit-street/add-edit-street.component';
import { HttpClient } from '@angular/common/http';
import { GenericRestService } from '../services/generic-rest.service';
import { Street } from '../Models/Street';
import { GenericComponentsModule } from '../generic-components/generic-components.module';
import { RouterModule } from '@angular/router';
import { routes } from './street.routes';



@NgModule({
  declarations: [
    StreetTableComponent,
    AddEditStreetComponent
  ],
  providers: [
    {
      provide: 'streetService',
      useFactory: (http: HttpClient) => {
        return new GenericRestService<Street>(http, {
          resourceEndpoint: 'api/Street'
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
export class StreetModule { }
