import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApartmentDto } from 'src/app/core/Models/ApartmentDto';
import { GenericRestService } from 'src/app/core/services/generic-rest.service';

@Component({
  selector: 'app-add-edit-apartment',
  templateUrl: './add-edit-apartment.component.html',
  styleUrls: ['./add-edit-apartment.component.css']
})
export class AddEditApartmentComponent implements OnInit {
  public apartmentForm: FormGroup;

  private id: number;
  private isAddMode: boolean;

  constructor(@Inject('apartmentService') protected apartmentService: GenericRestService<ApartmentDto>,
              private readonly fb: FormBuilder,
              private readonly router: Router,
              private readonly route: ActivatedRoute) { }

  public ngOnInit(): void {
    this.id = Number.parseInt(this.route.snapshot.params['id']);

    this.apartmentForm = this.fb.group({
      relatedFamily: ['', [Validators.required]],
      registeredCountPeople: ['', [Validators.required]],
      receiptCode: [''],
      address: this.fb.group({
        country: ['', [Validators.required]],
        state: ['', [Validators.required]],
        city: ['', [Validators.required]],
        street: ['', [Validators.required]],
        apartmentNumber: ['', [Validators.required]],
        houseNumber: ['', [Validators.required]],
        buildingNumber: ['', [Validators.required]],
        entranceNumber: ['', [Validators.required]]
      })
    });

    if (this.id) {
      this.apartmentService.getById(this.id).subscribe(result => this.apartmentForm.patchValue(result),
        error => console.error(error));
    }
  }

  public sendData(data: any): void {
    if (!this.id)
      this.createApartment(data);
    else
      this.updateApartment(data);

    this.router.navigate([`/apartments`]);
  }

  private createApartment(data: any): void {
    let apartment = { ... data };
    this.apartmentService.add(apartment).subscribe(result => console.log(result),
      error => console.error(error));
  }

  private updateApartment(data: any): void {
    let apartment = { id: this.id, ... data };
    this.apartmentService.update(this.id, apartment).subscribe(result => console.log(result),
      error => console.error(error));
  }
}