import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AreaTableComponent } from './area-table/area-table.component';
import { AddEditAreaComponent } from './add-edit-area/add-edit-area.component';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { routes } from './area.routes';
import { GenericRestService } from 'src/app/core/services/generic-rest.service';
import { AreaDto } from 'src/app/core/Models/AreaDto';
import { GenericComponentsModule } from 'src/app/shared/generic-components.module';



@NgModule({
  declarations: [
    AreaTableComponent,
    AddEditAreaComponent
  ],
  providers: [
    {
      provide: 'areaService',
      useFactory: (http: HttpClient) => {
        return new GenericRestService<AreaDto>(http, {
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
