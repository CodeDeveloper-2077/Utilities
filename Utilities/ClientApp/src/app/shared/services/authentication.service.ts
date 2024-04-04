import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegistrationResponseDto } from 'src/app/shared/Models/RegistrationResponseDto';
import { UserForRegistrationDto } from 'src/app/shared/Models/UserForRegistration';
import { UserForAuthenticationDto } from '../Models/UserForAuthentication';
import { AuthResponseDto } from '../Models/AuthResponse';
import { Subject } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ForgotPassword } from '../Models/ForgotPassword';
import { ResetPassword } from '../Models/ResetPassword';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private readonly baseUrl = 'https://localhost:7202/';
  private readonly authChangeSub = new Subject<boolean>();
  public authChanged = this.authChangeSub.asObservable();

  constructor(private readonly http: HttpClient, private readonly jwtHelper: JwtHelperService) { }

  public registerUser = (route: string, user: UserForRegistrationDto) => {
    return this.http.post<RegistrationResponseDto>(`${this.baseUrl}${route}`, user);
  }

  public loginUser = (route: string, user: UserForAuthenticationDto) => {
    return this.http.post<AuthResponseDto>(`${this.baseUrl}${route}`, user);
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

  public isUserAdmin = (): boolean => {
    const token = localStorage.getItem("token");
    const decodedToken = this.jwtHelper.decodeToken(token);
    const role = decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];

    return role === "Administrator";
  }

  public forgorPassword = (route: string, body: ForgotPassword) => {
    return this.http.post(`${this.baseUrl}${route}`, body);
  }

  public resetPassword = (route: string, body: ResetPassword) => {
    return this.http.post(`${this.baseUrl}${route}`, body);
  }
}
