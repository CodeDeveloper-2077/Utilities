import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements DoCheck {
  public isUserAuthenticated: boolean = false;
  isExpanded = false;

  constructor(private readonly authService: AuthenticationService, private readonly router: Router) { }

  public ngDoCheck(): void {
    this.authService.authChanged.subscribe({
      next: (response) => {
        this.isUserAuthenticated = response;
      } 
    });
  }

  public logout = () => {
    this.authService.logoutUser();
    this.router.navigate(['/']);
  }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
