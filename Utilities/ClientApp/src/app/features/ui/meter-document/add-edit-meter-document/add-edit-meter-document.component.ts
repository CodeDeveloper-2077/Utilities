import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MeterDocumentDto } from 'src/app/core/Models/MeterDocumentDto';
import { GenericRestService } from 'src/app/core/services/generic-rest.service';

@Component({
  selector: 'app-add-edit-meter-document',
  templateUrl: './add-edit-meter-document.component.html',
  styleUrls: ['./add-edit-meter-document.component.css']
})
export class AddEditMeterDocumentComponent {
  public meterDocumentForm: FormGroup;
  private id: number;

  constructor(@Inject('meterDocumentService') private readonly meterDocumentService: GenericRestService<MeterDocumentDto>,
              private readonly fb: FormBuilder,
              private readonly router: Router,
              private readonly route: ActivatedRoute) { }

  public ngOnInit(): void {
    this.id = Number.parseInt(this.route.snapshot.params['id']);

    this.meterDocumentForm = this.fb.group({
      body: ['', [Validators.required]]
    });

    if (this.id) {
      this.meterDocumentService.getById(this.id).subscribe(result => this.meterDocumentForm.patchValue(result),
        error => console.error(error));
    }
  }

  public sendData(data: any): void {
    if (!this.id)
      this.createMeterDocument(data);
    else
      this.updateMeterDocument(data);

    this.router.navigate([`/meters-documents`]);
  }

  private createMeterDocument(data: any): void {
    let meterDocument = { ... data };
    this.meterDocumentService.add(meterDocument).subscribe(result => console.log(result),
      error => console.error(error));
  }

  private updateMeterDocument(data: any): void {
    let meterDocument = { id: this.id, ... data };
    this.meterDocumentService.update(this.id, meterDocument).subscribe(result => console.log(result),
      error => console.error(error));
  }
}
