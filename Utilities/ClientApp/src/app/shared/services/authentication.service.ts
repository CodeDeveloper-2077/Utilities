import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { RegistrationResponseDto } from 'src/app/shared/Models/RegistrationResponseDto';
import { UserForRegistrationDto } from 'src/app/shared/Models/UserForRegistration';
import { UserForAuthenticationDto } from '../Models/UserForAuthentication';
import { AuthResponseDto } from '../Models/AuthResponse';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private readonly authChangeSub = new Subject<boolean>();
  public authChanged = this.authChangeSub.asObservable();

  constructor(private readonly http: HttpClient) { }

  public registerUser = (route: string, user: UserForRegistrationDto) => {
    return this.http.post<RegistrationResponseDto>(`https://localhost:7202/${route}`, user);
  }

  public loginUser = (route: string, user: UserForAuthenticationDto) => {
    return this.http.post<AuthResponseDto>(`https://localhost:7202/${route}`, user);
  }

  public logoutUser = () => {
    localStorage.removeItem("token");
    this.sendAuthStateChangeNotification(false);
  }

  public sendAuthStateChangeNotification = (isAuthenticated: boolean) => {
    return this.authChangeSub.next(isAuthenticated);
  }
}
