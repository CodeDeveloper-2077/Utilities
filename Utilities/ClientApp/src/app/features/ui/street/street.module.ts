import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StreetTableComponent } from './street-table/street-table.component';
import { AddEditStreetComponent } from './add-edit-street/add-edit-street.component';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { routes } from './street.routes';
import { GenericRestService } from 'src/app/core/services/generic-rest.service';
import { StreetDto } from 'src/app/core/Models/StreetDto';
import { GenericComponentsModule } from 'src/app/shared/generic-components.module';



@NgModule({
  declarations: [
    StreetTableComponent,
    AddEditStreetComponent
  ],
  providers: [
    {
      provide: 'streetService',
      useFactory: (http: HttpClient) => {
        return new GenericRestService<StreetDto>(http, {
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
