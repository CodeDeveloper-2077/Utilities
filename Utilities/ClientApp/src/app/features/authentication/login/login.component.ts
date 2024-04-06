import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthResponseDto } from 'src/app/shared/Models/AuthResponse';
import { UserForAuthenticationDto } from 'src/app/shared/Models/UserForAuthentication';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private returnUrl: string;

  loginForm: FormGroup;
  errorMessage: string;
  showError: boolean = false;

  constructor(private readonly authService: AuthenticationService,
              private readonly fb: FormBuilder, 
              private readonly router: Router, 
              private readonly route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  public validateControl(controlName: string) : boolean {
    return this.loginForm.get(controlName).invalid && this.loginForm.get(controlName).touched;
  }

  public hasError(controlName: string, errorName: string) : boolean {
    return this.loginForm.get(controlName).hasError(errorName);
  }

  login(data: any): void {
    this.showError = false;
    let login = {  ... data };
    const userForAuth: UserForAuthenticationDto = {
      email: login.username,
      password: login.password,
      clientUri: "https://localhost:44444/authentication/forgotpassword"
    };

    this.authService.loginUser('api/accounts/login', userForAuth).subscribe({
      next: (response: AuthResponseDto) => {
        localStorage.setItem("token", response.token);
        this.authService.sendAuthStateChangeNotification(response.isAuthSuccessful);
        this.router.navigate([this.returnUrl]);
      },
      error: (error: HttpErrorResponse) => {
        this.errorMessage = error.message;
        this.showError = true;
      }
    });
  }
}