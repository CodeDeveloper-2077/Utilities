import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ResetPassword } from 'src/app/shared/Models/ResetPassword';
import { PasswordConfirmationValidatorService } from 'src/app/shared/custom-validators/password-confirmation-validator.service';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  public resetPasswordForm: FormGroup;
  public showSuccess: boolean;
  public showError: boolean;
  public errorMessage: string;

  private token: string;
  private email: string;

  constructor(private readonly authService: AuthenticationService, 
              private readonly passConfValidator: PasswordConfirmationValidatorService, 
              private readonly fb: FormBuilder,
              private readonly route: ActivatedRoute) { }

  ngOnInit(): void {
    this.resetPasswordForm = this.fb.group({
      password: ['', [Validators.required]],
      confirm: ['']
    });

    this.resetPasswordForm.get('confirm').setValidators([Validators.required,
      this.passConfValidator.validateConfirmPassword(this.resetPasswordForm.get('password'))]);

      this.token = this.route.snapshot.queryParams["token"];
      this.email = this.route.snapshot.queryParams["email"];
  }

  public validateControl = (controlName: string) : boolean => {
    return this.resetPasswordForm.get(controlName).invalid && this.resetPasswordForm.get(controlName).touched;
  }

  public hasError = (controlName: string, errorName: string) : boolean => {
    return this.resetPasswordForm.get(controlName).hasError(errorName);
  }

  public resetPassword = (resetPasswordFormValue) => {
    this.showError = this.showSuccess = false;
    const resetPass = { ...resetPasswordFormValue };

    const resetPasswordDto: ResetPassword = {
      password: resetPass.password,
      confirmPassword: resetPass.confirm,
      token: this.token,
      email: this.email
    };

    this.authService.resetPassword("api/accounts/resetpassword", resetPasswordDto).subscribe({
      next: () => this.showSuccess = true,
      error: (error: HttpErrorResponse) => {
        this.showError = true;
        this.errorMessage = error.message;
      }
    });
  }
}
