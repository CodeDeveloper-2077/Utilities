import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatagridComponent } from './datagrid/datagrid.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddEditFormComponent } from './add-edit-form/add-edit-form.component';
import { StringConverterService } from '../core/services/string-converter.service';



@NgModule({
  declarations: [
    DatagridComponent,
    AddEditFormComponent
  ],
  providers: [StringConverterService],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [DatagridComponent, AddEditFormComponent]
})
export class GenericComponentsModule { }
