import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

export interface ServiceConfig {
  resourceEndpoint: string;
}

export const SERVICE_CONFIG = new InjectionToken<ServiceConfig>('ServiceConfig');

@Injectable({
  providedIn: 'root'
})
export class GenericRestService<T> {
  protected readonly baseUrl: string;
  protected readonly resourceEndpoint: string;

  constructor(protected readonly http: HttpClient, @Inject(SERVICE_CONFIG) config: ServiceConfig) {
    this.baseUrl = "https://localhost:7202/";
    this.resourceEndpoint = config.resourceEndpoint;
  }

  public getAll() : Observable<T[]> {
    return this.http.get<T[]>(`${this.baseUrl}${this.resourceEndpoint}`);
  }

  public getById(id: number) : Observable<T> {
    return this.http.get<T>(`${this.baseUrl}${this.resourceEndpoint}/${id}`);
  }

  public add(data: T) : Observable<T> {
    return this.http.post<T>(`${this.baseUrl}${this.resourceEndpoint}`, data);
  }

  public update(id: number, data: T) : Observable<T> {
    return this.http.put<T>(`${this.baseUrl}${this.resourceEndpoint}/${id}`, data);
  }

  public delete(id: number) : Observable<number> {
    return this.http.delete<number>(`${this.baseUrl}${this.resourceEndpoint}/${id}`);
  }
}
