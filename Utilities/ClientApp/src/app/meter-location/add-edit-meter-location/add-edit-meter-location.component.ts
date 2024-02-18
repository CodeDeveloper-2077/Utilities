import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GenericRestService } from 'src/app/services/generic-rest.service';
import { MeterLocation } from 'src/app/Models/MeterLocation';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-edit-meter-location',
  templateUrl: './add-edit-meter-location.component.html',
  styleUrls: ['./add-edit-meter-location.component.css']
})
export class AddEditMeterLocationComponent {
  private id: number;
  private isAddMode: boolean;
  public meterLocationForm: FormGroup;

  constructor(@Inject('meterLocationService') private readonly meterLocationService: GenericRestService<MeterLocation>,
              private readonly fb: FormBuilder,
              private readonly router: Router,
              private readonly route: ActivatedRoute) { }

  public ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;

    this.meterLocationForm = this.fb.group({
      name: ['', Validators.required],
      meterId: ['', Validators.required]
    });

    if (!this.isAddMode) {
      this.meterLocationService.getById(this.id).subscribe(result => this.meterLocationForm.patchValue(result),
        error => console.error(error));
    }
  }

  public sendData(data: any): void {
    if (this.isAddMode)
      this.createMeterLocation(data);
    else
      this.updateMeterLocation(data);

    this.router.navigate(['/meter-locations']);
  }

  private createMeterLocation(data: any): void {
    let meterLocation = { ... data };
    this.meterLocationService.add(meterLocation).subscribe(result => console.log(result),
      error => console.error(error));
  }

  private updateMeterLocation(data: any): void {
    let meterLocation = { id: this.id, ... data };
    this.meterLocationService.update(this.id, meterLocation).subscribe(result => console.log(result),
      error => console.error(error));
  }
}
