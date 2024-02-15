import { Component, OnInit } from '@angular/core';
import { MeterLocationService } from '../services/meter-location.service';
import { MeterLocation } from '../Models/MeterLocation';

@Component({
  selector: 'app-fetch-data',
  providers: [{ provide: 'controller_name', useValue: 'api/MeterLocation' }],
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent implements OnInit {
  public meterLocations: MeterLocation[] = [];

  constructor(private readonly meterLocationService: MeterLocationService) { }

  public ngOnInit(): void {
    this.meterLocationService.getAll().subscribe(result => this.meterLocations = result,
      error => console.error(error));
  }
}