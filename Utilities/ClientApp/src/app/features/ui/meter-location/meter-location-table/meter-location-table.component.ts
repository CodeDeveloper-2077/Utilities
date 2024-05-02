import { Component, Inject, OnInit } from '@angular/core';
import { MeterLocationDto } from 'src/app/core/Models/MeterLocationDto';
import { GenericRestService } from 'src/app/core/services/generic-rest.service';

@Component({
  selector: 'app-meter-location-table',
  templateUrl: './meter-location-table.component.html',
  styleUrls: ['./meter-location-table.component.css']
})
export class MeterLocationTableComponent implements OnInit {
  protected entityType: string = "meter-location";
  public headArray: string[] = ['id', 'name'];
  public meterLocations: MeterLocationDto[] = [];
  
  constructor(@Inject('meterLocationService') protected readonly meterLocationService: GenericRestService<MeterLocationDto>) { }

  public ngOnInit(): void {
    this.meterLocationService.getAll().subscribe(result => {
      this.meterLocations = result;
    }, error => console.error(error));
  }
}
