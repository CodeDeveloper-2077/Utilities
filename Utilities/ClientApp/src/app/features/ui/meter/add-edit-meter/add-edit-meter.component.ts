import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MeterDto } from 'src/app/core/Models/MeterDto';
import { GenericRestService } from 'src/app/core/services/generic-rest.service';

@Component({
  selector: 'app-add-edit-meter',
  templateUrl: './add-edit-meter.component.html',
  styleUrls: ['./add-edit-meter.component.css']
})
export class AddEditMeterComponent {
  public response: { dbPath: string };

  public meterForm: FormGroup;
  private id: number;

  constructor(@Inject('meterService') private readonly meterService: GenericRestService<MeterDto>,
              private readonly fb: FormBuilder,
              private readonly router: Router,
              private readonly route: ActivatedRoute) { }

  public ngOnInit(): void {
    this.id = Number.parseInt(this.route.snapshot.params['id']);

    this.meterForm = this.fb.group({
      meterName: ['', [Validators.required]],
      meterNumber: ['', [Validators.required]],
      prevCheckDate: [new Date().getFullYear(), [Validators.required]],
      nextCheckDate: [new Date().getFullYear(), [Validators.required]],
      apartmentId: ['', [Validators.required]],
      meterLocationId: ['', [Validators.required]]
    });

    if (this.id) {
      this.meterService.getById(this.id).subscribe(result => {
          this.meterForm.patchValue(result);
          this.response = {
            dbPath: result.docPath
          };
        },
        error => console.error(error));
    }
  }

  public sendData(data: any): void {
    if (!this.id)
      this.createMeter(data);
    else
      this.updateMeter(data);

    this.router.navigate([`/meters`]);
  }

  private createMeter(data: any): void {
    let meter = {...data, docPath: this.response.dbPath };
    this.meterService.add(meter).subscribe(result => console.log(result),
      error => console.error(error));
  }

  private updateMeter(data: any): void {
    let meter = { id: this.id, docPath: this.response.dbPath, ... data };
    this.meterService.update(this.id, meter).subscribe(result => console.log(result),
      error => console.error(error));
  }

  public uploadFinished = (event): void => {
    this.response = event;
  }
}
