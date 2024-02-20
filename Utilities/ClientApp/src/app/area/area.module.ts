import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AreaTableComponent } from './area-table/area-table.component';
import { AddEditAreaComponent } from './add-edit-area/add-edit-area.component';
import { HttpClient } from '@angular/common/http';
import { GenericRestService } from '../services/generic-rest.service';
import { Area } from '../Models/Area';
import { GenericComponentsModule } from '../generic-components/generic-components.module';
import { RouterModule } from '@angular/router';
import { routes } from './area.routes';



@NgModule({
  declarations: [
    AreaTableComponent,
    AddEditAreaComponent
  ],
  providers: [
    {
      provide: 'areaService',
      useFactory: (http: HttpClient) => {
        return new GenericRestService<Area>(http, {
          resourceEndpoint: 'api/Area'
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
export class AreaModule { }
