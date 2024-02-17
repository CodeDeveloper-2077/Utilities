import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MeterLocation } from 'src/app/Models/MeterLocation';
import { GenericRestService } from 'src/app/services/generic-rest.service';

@Component({
  selector: 'app-meter-location-table',
  templateUrl: './meter-location-table.component.html',
  styleUrls: ['./meter-location-table.component.css']
})
export class MeterLocationTableComponent implements OnInit {
  public meterLocations: MeterLocation[] = [];

  constructor(@Inject('meterLocationService') private readonly meterLocationService: GenericRestService<MeterLocation>,
              private readonly router: Router) { }

  public ngOnInit() : void {
    this.meterLocationService.getAll().subscribe(result => this.meterLocations = result,
      error => console.error(error));
  }

  public addBtn() : void {
    this.router.navigate(['/add-meter-location']);
  }

  public updateBtn(id: number) : void {
    this.router.navigate([`/edit-meter-location/${id}`]);
  }

  public removeBtn(id: number) : void {
    if(confirm("Are you sure about removing meter location?")) {
      this.meterLocationService.delete(id).subscribe(result => console.log(`${result} has been deleted`),
        error => console.error(error));
    }
  }
}
