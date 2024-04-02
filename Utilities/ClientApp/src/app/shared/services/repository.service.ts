import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {
  private baseUrl: string = "https://localhost:7202/";
  constructor(private readonly http: HttpClient) { }

  public getClaims = (route: string) => {
    return this.http.get(`${this.baseUrl}${route}`);
  }
}
