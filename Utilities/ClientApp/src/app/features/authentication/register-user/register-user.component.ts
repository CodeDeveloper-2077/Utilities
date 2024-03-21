import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { UserForRegistrationDto } from 'src/app/shared/Models/UserForRegistration';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  public registerForm: FormGroup;

  constructor(private readonly authService: AuthenticationService, private readonly fb: FormBuilder) { }

  public ngOnInit(): void {
    this.registerForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirm: ['']
    });
  }

  public validateControl(control: string): boolean {
    return this.registerForm.get(control).invalid && this.registerForm.get(control).touched;
  }

  public hasError(control: string, error: string): boolean {
    return this.registerForm.get(control).hasError(error);
  }

  public registerUser(registerFormValue): void {
    let formValues = { ... registerFormValue };

    let user: UserForRegistrationDto = {
      firstName: formValues.firstName,
      lastName: formValues.lastName,
      email: formValues.email,
      password: formValues.password,
      passwordConfirmation: formValues.confirm
    };

    this.authService.registerUser('api/Accounts/Registration', user).subscribe({
      next: () => console.log("Successful Registration."),
      error: (error: HttpErrorResponse) => console.error(error.error.errors)
    });
  }
}
