import { Injectable } from '@angular/core';
import { GenericRestService } from './generic-rest.service';
import { Apartment } from '../Models/Apartment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApartmentService extends GenericRestService<Apartment> {
  constructor(protected readonly http: HttpClient) {
    super(http, "api/Apartment");
  }
}
