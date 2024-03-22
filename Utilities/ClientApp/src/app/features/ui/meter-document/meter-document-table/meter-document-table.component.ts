import { Component, Inject, OnInit } from '@angular/core';
import { MeterDocument } from 'src/app/shared/Models/MeterDocument';
import { GenericRestService } from 'src/app/shared/services/generic-rest.service';

@Component({
  selector: 'app-meter-document-table',
  templateUrl: './meter-document-table.component.html',
  styleUrls: ['./meter-document-table.component.css']
})
export class MeterDocumentTableComponent implements OnInit {
  protected entityType: string = "meter-document";
  public headArray: string[] = ['id', 'body'];
  public meterDocuments: MeterDocument[] = [];
  
  constructor(@Inject('meterDocumentService') protected readonly meterDocumentService: GenericRestService<MeterDocument>) { }

  public ngOnInit(): void {
    this.meterDocumentService.getAll().subscribe(result => {
      this.meterDocuments = result;
    },
      error => console.error(error));
  }
}
