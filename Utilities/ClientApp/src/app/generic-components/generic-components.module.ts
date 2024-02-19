import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericTableComponent } from './generic-table/generic-table.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GenericAddEditFormComponent } from './generic-add-edit-form/generic-add-edit-form.component';



@NgModule({
  declarations: [
    GenericTableComponent,
    GenericAddEditFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [GenericTableComponent, GenericAddEditFormComponent]
})
export class GenericComponentsModule { }
