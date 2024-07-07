import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppSettings } from '../constants/AppSettings';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {
  constructor(private readonly http: HttpClient) { }

  public getClaims = (route: string) => {
    return this.http.get(`${AppSettings.API_ENDPOINT}${route}`);
  }
}
