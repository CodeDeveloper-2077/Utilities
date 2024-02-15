import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenericRestService } from './generic-rest.service';
import { City } from '../Models/city';

@Injectable({
  providedIn: 'root'
})
export class CityService extends GenericRestService<City> {
  constructor(protected readonly http: HttpClient) {
    super(http, "api/City");
  }
}
