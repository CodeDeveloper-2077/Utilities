import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { RegistrationResponseDto } from 'src/app/shared/Models/RegistrationResponseDto';
import { UserForRegistrationDto } from 'src/app/shared/Models/UserForRegistration';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private readonly http: HttpClient) { }

  public registerUser = (route: string, user: UserForRegistrationDto) => {
    return this.http.post<RegistrationResponseDto>(`https://localhost:7202/${route}`, user);
  }
}
