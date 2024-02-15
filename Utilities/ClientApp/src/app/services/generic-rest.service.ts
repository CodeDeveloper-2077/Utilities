import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl: string = "https://localhost:7202";

export abstract class GenericRestService<T> {
  constructor(protected readonly http: HttpClient, protected actionUrl: string) { }

  public getAll() : Observable<T[]> {
    return this.http.get<T[]>(`${baseUrl}/${this.actionUrl}`);
  }

  public getById(id: number) : Observable<T> {
    return this.http.get<T>(`${baseUrl}/${this.actionUrl}/${id}`);
  }

  public post(data: T): Observable<T> {
    return this.http.post<T>(`${baseUrl}/${this.actionUrl}`, data);
  }

  public put(data: T, id: number): Observable<T> {
    return this.http.put<T>(`${baseUrl}/${this.actionUrl}/${id}`, data);
  }

  public delete(id: number) : Observable<T> {
    return this.http.delete<T>(`${baseUrl}/${this.actionUrl}/${id}`);
  }
}
