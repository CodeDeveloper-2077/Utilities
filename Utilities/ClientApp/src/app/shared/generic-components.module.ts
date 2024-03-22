import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataGridComponent } from './data-grid/data-grid.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddEditFormComponent } from './add-edit-form/add-edit-form.component';
import { StringConverterService } from './services/string-converter.service';



@NgModule({
  declarations: [
    DataGridComponent,
    AddEditFormComponent
  ],
  providers: [StringConverterService],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [DataGridComponent, AddEditFormComponent]
})
export class GenericComponentsModule { }
