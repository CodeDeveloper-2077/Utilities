import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';

@Component({
  selector: 'app-email-confirmation',
  templateUrl: './email-confirmation.component.html',
  styleUrls: ['./email-confirmation.component.css']
})
export class EmailConfirmationComponent implements OnInit {
  public showError: boolean;
  public showSuccess: boolean;
  public errorMessage: string;

  constructor(private readonly authService: AuthenticationService, private readonly route: ActivatedRoute) {  }

  public ngOnInit(): void {
    this.confirmEmail();
  }

  private confirmEmail = () => {
    this.showError = this.showSuccess = false;

    const token = this.route.snapshot.queryParams['token'];
    const email = this.route.snapshot.queryParams['email'];

    this.authService.confirmEmail('api/accounts/emailconfirmation', token, email).subscribe({
      next: () => this.showSuccess = true,
      error: (error: HttpErrorResponse) => {
        this.showError = true;
        this.errorMessage = error.message;
      }
    });
  }
}
