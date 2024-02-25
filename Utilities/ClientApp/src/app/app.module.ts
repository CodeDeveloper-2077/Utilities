import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { MeterLocationModule } from './meter-location/meter-location.module';
import { ApartmentModule } from './apartment/apartment.module';
import { AreaModule } from './area/area.module';
import { CityModule } from './city/city.module';
import { CountryModule } from './country/country.module';
import { MeterDocumentModule } from './meter-document/meter-document.module';
import { MeterModule } from './meter/meter.module';
import { StreetModule } from './street/street.module';

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
    ]),
    MeterLocationModule,
    ApartmentModule,
    AreaModule,
    CityModule,
    CountryModule,
    MeterDocumentModule,
    MeterModule,
    StreetModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
