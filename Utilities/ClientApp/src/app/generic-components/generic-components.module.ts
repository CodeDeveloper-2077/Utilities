import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericTableComponent } from './generic-table/generic-table.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GenericAddEditFormComponent } from './generic-add-edit-form/generic-add-edit-form.component';
import { StringConverterService } from '../services/string-converter.service';



@NgModule({
  declarations: [
    GenericTableComponent,
    GenericAddEditFormComponent
  ],
  providers: [StringConverterService],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [GenericTableComponent, GenericAddEditFormComponent]
})
export class GenericComponentsModule { }
