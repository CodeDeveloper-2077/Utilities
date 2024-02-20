import { Component, Inject, OnInit } from '@angular/core';
import { Area } from 'src/app/Models/Area';
import { GenericRestService } from 'src/app/services/generic-rest.service';

@Component({
  selector: 'app-area-table',
  templateUrl: './area-table.component.html',
  styleUrls: ['./area-table.component.css']
})
export class AreaTableComponent implements OnInit {
  protected entityType: string = "area";
  public headArray: string[] = ['countryId', 'name'];
  public areas: Area[] = [];
  
  constructor(@Inject('areaService') protected readonly areaService: GenericRestService<Area>) { }

  public ngOnInit(): void {
    this.areaService.getAll().subscribe(result => {
      this.areas = result;
    },
      error => console.error(error));
  }
}
