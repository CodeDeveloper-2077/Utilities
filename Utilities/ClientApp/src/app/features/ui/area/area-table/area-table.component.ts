import { Component, Inject, OnInit } from '@angular/core';
import { AreaDto } from 'src/app/core/Models/AreaDto';
import { GenericRestService } from 'src/app/core/services/generic-rest.service';

@Component({
  selector: 'app-area-table',
  templateUrl: './area-table.component.html',
  styleUrls: ['./area-table.component.css']
})
export class AreaTableComponent implements OnInit {
  protected entityType: string = "area";
  public headArray: string[] = ['id', 'name'];
  public areas: AreaDto[] = [];
  
  constructor(@Inject('areaService') protected readonly areaService: GenericRestService<AreaDto>) { }

  public ngOnInit(): void {
    this.areaService.getAll().subscribe(result => {
      this.areas = result;
    },
      error => console.error(error));
  }
}
