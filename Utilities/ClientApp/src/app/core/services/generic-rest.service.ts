import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from '../constants/AppSettings';

export interface ServiceConfig {
  resourceEndpoint: string;
}

export const SERVICE_CONFIG = new InjectionToken<ServiceConfig>('ServiceConfig');

@Injectable({
  providedIn: 'root'
})
export class GenericRestService<T> {
  private readonly resourceEndpoint: string;

  constructor(private readonly http: HttpClient, @Inject(SERVICE_CONFIG) config: ServiceConfig) {
    this.resourceEndpoint = config.resourceEndpoint;
  }

  public getAll() : Observable<T[]> {
    return this.http.get<T[]>(`${AppSettings.API_ENDPOINT}${this.resourceEndpoint}`);
  }

  public getById(id: number) : Observable<T> {
    return this.http.get<T>(`${AppSettings.API_ENDPOINT}${this.resourceEndpoint}/${id}`);
  }

  public add(data: T) : Observable<T> {
    return this.http.post<T>(`${AppSettings.API_ENDPOINT}${this.resourceEndpoint}`, data);
  }

  public update(id: number, data: T) : Observable<T> {
    return this.http.put<T>(`${AppSettings.API_ENDPOINT}${this.resourceEndpoint}/${id}`, data);
  }

  public delete(id: number) : Observable<number> {
    return this.http.delete<number>(`${AppSettings.API_ENDPOINT}${this.resourceEndpoint}/${id}`);
  }
}
