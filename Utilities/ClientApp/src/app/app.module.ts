import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

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
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      {  path: 'authentication', loadChildren: () => import('./features/authentication/authentication.module').then(m => m.AuthenticationModule) }
    ]),
    MeterLocationModule,
    ApartmentModule,
    AreaModule,
    CityModule,
    CountryModule,
    MeterDocumentModule,
    MeterModule,
    StreetModule,
    AuthenticationModule
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
