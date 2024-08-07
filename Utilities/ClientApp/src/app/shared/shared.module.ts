import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StringConverterService } from '../core/services/string-converter.service';
import { UploadComponent } from './upload/upload.component';
import { SelectboxComponent } from './selectbox/selectbox.component';



@NgModule({
  declarations: [
    UploadComponent,
    SelectboxComponent
  ],
  providers: [StringConverterService],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [UploadComponent, SelectboxComponent]
})
export class SharedModule { }
