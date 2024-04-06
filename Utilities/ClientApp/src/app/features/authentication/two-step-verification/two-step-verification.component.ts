import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthResponseDto } from 'src/app/shared/Models/AuthResponse';
import { TwoFactor } from 'src/app/shared/Models/TwoFactor';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';

@Component({
  selector: 'app-two-step-verification',
  templateUrl: './two-step-verification.component.html',
  styleUrls: ['./two-step-verification.component.css']
})
export class TwoStepVerificationComponent implements OnInit {
  private provider: string;
  private email: string;
  private returnUrl: string;
  
  twoStepForm: FormGroup;
  showError: boolean;
  errorMessage: string;
  
  constructor(private readonly authService: AuthenticationService, 
              private readonly route: ActivatedRoute, 
              private readonly fb: FormBuilder,
              private readonly router: Router) { }
    
  public ngOnInit(): void {
    this.twoStepForm = this.fb.group({
      twoFactorCode: ['', [Validators.required]],
    });
    
      this.provider = this.route.snapshot.queryParams['provider'];
      this.email = this.route.snapshot.queryParams['email'];
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'];
  }

  public validateControl = (controlName: string) => {
    return this.twoStepForm.get(controlName).invalid && this.twoStepForm.get(controlName).touched
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.twoStepForm.get(controlName).hasError(errorName)
  }

  public loginUser = (twoStepFromValue) => {
    this.showError = false;
    
    const formValue = { ...twoStepFromValue };

    let twoFactorDto: TwoFactor = {
      email: this.email,
      provider: this.provider,
      token: formValue.twoFactorCode
    };

    this.authService.twoStepLogin('api/accounts/twostepverification', twoFactorDto)
    .subscribe({
      next: (res:AuthResponseDto) => {
        localStorage.setItem("token", res.token);
        this.authService.sendAuthStateChangeNotification(res.isAuthSuccessful);
        this.router.navigate([this.returnUrl]);
      },
      error: (err: HttpErrorResponse) => {
        this.errorMessage = err.message;
        this.showError = true;
      }
    })
  }  
}
