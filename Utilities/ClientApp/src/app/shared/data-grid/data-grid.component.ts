import { Component, Input, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { GenericRestService } from 'src/app/core/services/generic-rest.service';
import { StringConverterService } from 'src/app/core/services/string-converter.service';

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.css']
})
export class DataGridComponent {
  @Input() public  genericRestService: GenericRestService<any>;
  @Input() public headArray: string[];
  @Input() public dataArray: any[];
  @Input() public entityType: string;

  constructor(private readonly stringConverter: StringConverterService, private readonly router: Router) { }

  public addBtn() {
    this.router.navigate([`${this.entityType}s/add`]);
  }

  public updateBtn(id: number): void {
    this.router.navigate([`${this.entityType}s/edit/${id}`]);
  }

  public removeBtn(id: number): void {
    if(confirm("Are you sure about removing meter location?")) {
      this.genericRestService.delete(id).subscribe(result => console.log(`${result} has been deleted`),
        error => console.error(error));
    }
  }

  public getFormattedHeads(head: string): string {
    return this.stringConverter.convertFirstLetterToUpper(head);
  }
}
