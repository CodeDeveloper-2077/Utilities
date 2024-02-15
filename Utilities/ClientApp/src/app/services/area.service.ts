import { Injectable } from '@angular/core';
import { GenericRestService } from './generic-rest.service';
import { Area } from '../Models/Area';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AreaService extends GenericRestService<Area> {
  constructor(protected  readonly http: HttpClient) {
    super(http, "api/Area");
  }
}
