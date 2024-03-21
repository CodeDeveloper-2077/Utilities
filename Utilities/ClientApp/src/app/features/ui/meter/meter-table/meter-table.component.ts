import { Component, Inject, OnInit } from '@angular/core';
import { Meter } from 'src/app/shared/Models/Meter';
import { GenericRestService } from 'src/app/core/services/generic-rest.service';

@Component({
  selector: 'app-meter-table',
  templateUrl: './meter-table.component.html',
  styleUrls: ['./meter-table.component.css']
})
export class MeterTableComponent implements OnInit {
  protected entityType: string = "meter";
  public headArray: string[] = ['id', 'meterName', 'meterNumber', 'prevCheckDate', 'nextCheckDate'];
  public meters: Meter[] = [];
  
  constructor(@Inject('meterService') protected readonly meterService: GenericRestService<Meter>) { }

  public ngOnInit(): void {
    this.meterService.getAll().subscribe(result => {
      this.meters = result;
    },
      error => console.error(error));
  }
}
