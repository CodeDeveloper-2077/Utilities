import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenericRestService } from './generic-rest.service';
import { Country } from '../Models/Country';

@Injectable({
  providedIn: 'root'
})
export class CountryService extends GenericRestService<Country> {
  constructor(protected readonly http: HttpClient) {
    super(http, "api/Country");
  }
}
