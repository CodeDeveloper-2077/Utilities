import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { RegisterUserComponent } from './register-user/register-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { EmailConfirmationComponent } from './email-confirmation/email-confirmation.component';


@NgModule({
  declarations: [
    RegisterUserComponent,
    LoginComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    EmailConfirmationComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthenticationRoutingModule
  ]
})
export class AuthenticationModule { }
