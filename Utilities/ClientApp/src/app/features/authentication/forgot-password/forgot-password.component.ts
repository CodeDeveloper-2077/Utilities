import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ForgotPassword } from 'src/app/shared/Models/ForgotPassword';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  public forgotPasswordForm: FormGroup;
  public showSuccess: boolean;
  public showError: boolean;
  public errorMessage: string;
  public successMessage: string;

  constructor(private readonly authService: AuthenticationService, private readonly fb: FormBuilder) { }

  public ngOnInit(): void {
    this.forgotPasswordForm = this.fb.group({
      email: ['', [Validators.required]]
    });
  }

  public validateControl = (controlName: string) : boolean => {
    return this.forgotPasswordForm.get(controlName).invalid && this.forgotPasswordForm.get(controlName).touched;
  }

  public hasError = (controlName: string, errorName: string) : boolean => {
    return this.forgotPasswordForm.get(controlName).hasError(errorName);
  }

  public forgotPassword = (forgotPasswordFormValues): void => {
    this.showError = this.showSuccess = false;
    const forgotPass = { ...forgotPasswordFormValues };

    const forgotPasswordDto: ForgotPassword = {
      email: forgotPass.email,
      clientUri: "https://localhost:44444/authentication/forgotpassword"
    };

    this.authService.forgorPassword('api/accounts/forgotpassword', forgotPasswordDto).subscribe({
      next: () => {
        this.showSuccess = true;
        this.successMessage = 'The link has been sent, please check your email to reset your password.'
      },
      error: (error: HttpErrorResponse) => {
        this.showError = true;
        this.errorMessage = error.message;
      }
    });
  }
}
