import { Injectable } from '@angular/core';
import { GenericRestService } from './generic-rest.service';
import { MeterDocument } from '../Models/MeterDocument';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MeterDocumentService extends GenericRestService<MeterDocument> {
  constructor(protected readonly http: HttpClient) {
    super(http, "api/MeterDocument");
  }
}
