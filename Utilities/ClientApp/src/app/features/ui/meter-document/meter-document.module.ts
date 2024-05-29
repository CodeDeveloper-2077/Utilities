import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from './meter-document.routes';
import { GenericComponentsModule } from 'src/app/shared/generic-components.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AddMeterDocumentComponent } from './add-meter-document/add-meter-document.component';



@NgModule({
  declarations: [
    AddMeterDocumentComponent
  ],
  imports: [
    CommonModule,
    GenericComponentsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class MeterDocumentModule { }
