import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataGridComponent } from './data-grid/data-grid.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddEditFormComponent } from './add-edit-form/add-edit-form.component';
import { StringConverterService } from '../core/services/string-converter.service';
import { UploadComponent } from './upload/upload.component';
import { SelectboxComponent } from './selectbox/selectbox.component';



@NgModule({
  declarations: [
    DataGridComponent,
    AddEditFormComponent,
    UploadComponent,
    SelectboxComponent
  ],
  providers: [StringConverterService],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [DataGridComponent, AddEditFormComponent, UploadComponent, SelectboxComponent]
})
export class SharedModule { }
