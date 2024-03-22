import { Component, Inject, OnInit } from '@angular/core';
import { MeterLocation } from 'src/app/shared/Models/MeterLocation';
import { GenericRestService } from 'src/app/shared/services/generic-rest.service';

@Component({
  selector: 'app-meter-location-table',
  templateUrl: './meter-location-table.component.html',
  styleUrls: ['./meter-location-table.component.css']
})
export class MeterLocationTableComponent implements OnInit {
  protected entityType: string = "meter-location";
  public headArray: string[] = ['id', 'name'];
  public meterLocations: MeterLocation[] = [];
  
  constructor(@Inject('meterLocationService') protected readonly meterLocationService: GenericRestService<MeterLocation>) { }

  public ngOnInit(): void {
    this.meterLocationService.getAll().subscribe(result => {
      this.meterLocations = result;
    }, error => console.error(error));
  }
}
