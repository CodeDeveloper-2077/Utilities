import { Injectable } from '@angular/core';
import { GenericRestService } from './generic-rest.service';
import { Street } from '../Models/Street';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StreetService extends GenericRestService<Street> {
  constructor(protected readonly http: HttpClient) {
    super(http, "api/Street");
  }
}
