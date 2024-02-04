import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MeterLocation } from '../Models/MeterLocation';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent {
  public meterLocations: MeterLocation[] = [];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Array<MeterLocation>>(baseUrl + "utility").subscribe(result => {
      this.meterLocations = result;
    }, error => console.error(error));
  }
}