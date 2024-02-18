import { Component, Input, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { GenericRestService } from '../../services/generic-rest.service';

@Component({
  selector: 'app-generic-table',
  templateUrl: './generic-table.component.html',
  styleUrls: ['./generic-table.component.css']
})
export class GenericTableComponent {
  private readonly genericRestService: GenericRestService<any>;
  @Input() public entityType: string;
  @Input() public headArray: string[];
  @Input() public dataArray: any[];

  constructor(private readonly router: Router) { }

  public addBtn() {
    this.router.navigate([`add-${this.entityType}`]);
  }

  public updateBtn(id: number): void {
    this.router.navigate([`edit-${this.entityType}/${id}`]);
  }

  public removeBtn(id: number): void {
    if(confirm("Are you sure about removing meter location?")) {
      this.genericRestService.delete(id).subscribe(result => console.log(`${result} has been deleted`),
        error => console.error(error));
    }
  }
}
