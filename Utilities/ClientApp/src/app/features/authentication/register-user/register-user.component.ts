import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { UserForRegistrationDto } from 'src/app/core/Models/UserForRegistrationDto';
import { PasswordConfirmationValidatorService } from 'src/app/core/services/password-confirmation-validator.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  public registerForm: FormGroup;
  public errorMessage: string;
  public showError: boolean;

  constructor(private readonly authService: AuthenticationService, private readonly fb: FormBuilder, private readonly router: Router, private readonly passwdConfirmValidator: PasswordConfirmationValidatorService) { }

  public ngOnInit(): void {
    this.registerForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirm: ['']
    });

    this.registerForm.get('confirm').setValidators([Validators.required,
      this.passwdConfirmValidator.validateConfirmPassword(this.registerForm.get('password'))]);
  }

  public validateControl(control: string): boolean {
    return this.registerForm.get(control).invalid && this.registerForm.get(control).touched;
  }

  public hasError(control: string, error: string): boolean {
    return this.registerForm.get(control).hasError(error);
  }

  public registerUser(registerFormValue): void {
    this.showError = false;
    let formValues = { ... registerFormValue };

    let user: UserForRegistrationDto = {
      firstName: formValues.firstName,
      lastName: formValues.lastName,
      email: formValues.email,
      password: formValues.password,
      passwordConfirmation: formValues.confirm,
      clientUri: 'https://localhost:44444/authentication/emailconfirmation'
    };

    this.authService.registerUser('api/Accounts/Registration', user).subscribe({
      next: () => this.router.navigate(['/authentication/login']),
      error: (error: HttpErrorResponse) => {
        this.errorMessage = error.message;
        console.log(this.errorMessage);
        this.showError = true;
      }
    });
  }
}
