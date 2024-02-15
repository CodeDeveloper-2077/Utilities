import { Injectable } from '@angular/core';
import { GenericRestService } from './generic-rest.service';
import { Meter } from '../Models/Meter';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MeterService extends GenericRestService<Meter> {
  constructor(protected readonly http: HttpClient) {
    super(http, "api/Meter");
  }
}