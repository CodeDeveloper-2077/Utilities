import { Injectable } from '@angular/core';
import { GenericRestService } from './generic-rest.service';
import { MeterLocation } from '../Models/MeterLocation';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MeterLocationService extends GenericRestService<MeterLocation> {
  constructor(protected readonly http: HttpClient) { 
    super(http, "api/MeterLocation");
  }
}
