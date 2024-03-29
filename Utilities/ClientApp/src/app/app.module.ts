import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { JwtModule } from '@auth0/angular-jwt';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './core/components/nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { MeterLocationModule } from './features/ui/meter-location/meter-location.module';
import { ApartmentModule } from './features/ui/apartment/apartment.module';
import { AreaModule } from './features/ui/area/area.module';
import { CityModule } from './features/ui/city/city.module';
import { CountryModule } from './features/ui/country/country.module';
import { MeterDocumentModule } from './features/ui/meter-document/meter-document.module';
import { MeterModule } from './features/ui/meter/meter.module';
import { StreetModule } from './features/ui/street/street.module';
import { AuthenticationModule } from './features/authentication/authentication.module';
import { ErrorHandlerService } from './shared/services/error-handler.service';
import { AuthGuard } from './core/guards/auth.guard';

export function tokenGetter() {
  return localStorage.getItem("token");
}

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'authentication', loadChildren: () => import('./features/authentication/authentication.module').then(m => m.AuthenticationModule) },
  { path: 'apartments', loadChildren: () => import('./features/ui/apartment/apartment.module').then(m => m.ApartmentModule), canActivate: [AuthGuard] },
  { path: 'areas', loadChildren: () => import('./features/ui/area/area.module').then(m => m.AreaModule), canActivate: [AuthGuard] },
  { path: 'cities', loadChildren: () => import('./features/ui/city/city.module').then(m => m.CityModule), canActivate: [AuthGuard] },
  { path: 'countries', loadChildren: () => import('./features/ui/country/country.module').then(m => m.CountryModule), canActivate: [AuthGuard] },
  { path: 'meters', loadChildren: () => import('./features/ui/meter/meter.module').then(m => m.MeterModule), canActivate: [AuthGuard] },
  { path: 'meterDocuments', loadChildren: () => import('./features/ui/meter-document/meter-document.module').then(m => m.MeterDocumentModule), canActivate: [AuthGuard] },
  { path: 'meterLocations', loadChildren: () => import('./features/ui/meter-location/meter-location.module').then(m => m.MeterLocationModule), canActivate: [AuthGuard] },
  { path: 'streets', loadChildren: () => import('./features/ui/street/street.module').then(m => m.StreetModule), canActivate: [AuthGuard] }
];

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["localhost:44415"],
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
