import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { JwtModule } from '@auth0/angular-jwt';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './core/components/nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { ErrorHandlerService } from './core/interceptors/error-handler.service';
import { AuthGuard } from './core/guards/auth.guard';
import { PrivacyComponent } from './features/ui/privacy/privacy.component';
import { ForbiddenComponent } from './features/ui/forbidden/forbidden.component';
import { AdminGuard } from './core/guards/admin.guard';

export function tokenGetter() {
  return localStorage.getItem("token");
}

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'authentication', loadChildren: () => import('./features/authentication/authentication.module').then(m => m.AuthenticationModule) },
  { path: 'apartments', loadChildren: () => import('./features/ui/apartment/apartment.module').then(m => m.ApartmentModule), canActivate: [AuthGuard] },
  { path: 'areas', loadChildren: () => import('./features/ui/area/area.module').then(m => m.AreaModule) },
  { path: 'cities', loadChildren: () => import('./features/ui/city/city.module').then(m => m.CityModule) },
  { path: 'countries', loadChildren: () => import('./features/ui/country/country.module').then(m => m.CountryModule) },
  { path: 'meters', loadChildren: () => import('./features/ui/meter/meter.module').then(m => m.MeterModule) },
  { path: 'meter-documents', loadChildren: () => import('./features/ui/meter-document/meter-document.module').then(m => m.MeterDocumentModule) },
  { path: 'meter-locations', loadChildren: () => import('./features/ui/meter-location/meter-location.module').then(m => m.MeterLocationModule) },
  { path: 'streets', loadChildren: () => import('./features/ui/street/street.module').then(m => m.StreetModule) },
  { path: 'privacy', component: PrivacyComponent, canActivate: [AuthGuard, AdminGuard]},
  { path: 'forbidden', component: ForbiddenComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    PrivacyComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["localhost:7202"],
        disallowedRoutes: []
      }
    }),
  ],
  providers: [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorHandlerService,
    multi: true
  }],
  bootstrap: [AppComponent],
})
export class AppModule { }
