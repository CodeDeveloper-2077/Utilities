import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { RegistrationResponseDto } from 'src/app/shared/Models/RegistrationResponseDto';
import { UserForRegistrationDto } from 'src/app/shared/Models/UserForRegistration';
import { UserForAuthenticationDto } from '../Models/UserForAuthentication';
import { AuthResponseDto } from '../Models/AuthResponse';
import { Subject } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private readonly authChangeSub = new Subject<boolean>();
  public authChanged = this.authChangeSub.asObservable();

  constructor(private readonly http: HttpClient, private jwtHelper: JwtHelperService) { }

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

  public isUserAuthenticated = () => {
    const token = localStorage.getItem("token");
    return token && !this.jwtHelper.isTokenExpired(token);
  }

  public sendAuthStateChangeNotification = (isAuthenticated: boolean) => {
    return this.authChangeSub.next(isAuthenticated);
  }
}
