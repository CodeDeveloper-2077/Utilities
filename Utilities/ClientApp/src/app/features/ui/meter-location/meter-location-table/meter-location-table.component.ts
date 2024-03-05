import { Component, Inject, OnInit } from '@angular/core';
import { MeterLocation } from 'src/app/Models/MeterLocation';
import { GenericRestService } from 'src/app/core/services/generic-rest.service';

@Component({
  selector: 'app-meter-location-table',
  templateUrl: './meter-location-table.component.html',
  styleUrls: ['./meter-location-table.component.css']
})
export class MeterLocationTableComponent implements OnInit {
  protected entityType: string = "meter-location";
  public headArray: string[] = [];
  public meterLocations: MeterLocation[] = [];
  
  constructor(@Inject('meterLocationService') protected readonly meterLocationService: GenericRestService<MeterLocation>) { }

  public ngOnInit(): void {
    this.meterLocationService.getAll().subscribe(result => {
      this.meterLocations = result;
      this.headArray = Object.keys(this.meterLocations[0]).slice(1);
    }, error => console.error(error));
  }
}
