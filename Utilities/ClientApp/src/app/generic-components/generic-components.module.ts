import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericTableComponent } from './generic-table/generic-table.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    GenericTableComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [GenericTableComponent]
})
export class GenericComponentsModule { }
