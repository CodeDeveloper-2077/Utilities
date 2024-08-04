import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApartmentDto } from 'src/app/core/Models/ApartmentDto';
import { GenericRestService } from 'src/app/core/services/generic-rest.service';
import { AppSettings } from 'src/app/core/constants/AppSettings';
import { CountryDto } from 'src/app/core/Models/CountryDto';
import { StateDto } from 'src/app/core/Models/StateDto';
import { CityDto } from 'src/app/core/Models/CityDto';
import { StreetDto } from 'src/app/core/Models/StreetDto';
import { AddressDto } from 'src/app/core/Models/AddressDto';

@Component({
  selector: 'app-add-edit-apartment',
  templateUrl: './add-edit-apartment.component.html',
  styleUrls: ['./add-edit-apartment.component.css']
})
export class AddEditApartmentComponent implements OnInit {
  public apartmentForm: FormGroup;
  public endpoint: string;

  private id: number;
  private isAddMode: boolean;

  constructor(@Inject('apartmentService') protected apartmentService: GenericRestService<ApartmentDto>,
              private readonly fb: FormBuilder,
              private readonly router: Router,
              private readonly route: ActivatedRoute) { }

  public ngOnInit(): void {
    this.endpoint = AppSettings.API_ENDPOINT;
    
    this.id = +this.route.snapshot.params['id'];

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
    const addressFormGroup: FormGroup = this.apartmentForm.controls['address'] as FormGroup;


    if (this.id) {
      // this.apartmentService.getById(this.id).subscribe(result => this.apartmentForm.patchValue(result),
      //   error => console.error(error));
      this.apartmentService.getById(this.id).subscribe(result => {
        this.apartmentForm.controls['relatedFamily'].setValue(result.relatedFamily);
        this.apartmentForm.controls['registeredCountPeople'].setValue(result.registeredCountPeople);
        this.apartmentForm.controls['receiptCode'].setValue(result.receiptCode);
        addressFormGroup.controls['country'].setValue('Poland');
      }, error => console.error(error));
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
    debugger;
    let formData = { ... data };
    const formAddress = formData.address;

    const country: CountryDto = {
      name: formAddress.country
    };

    const state: StateDto = {
      name: formAddress.state,
      country: country
    };

    const city: CityDto = {
      name: formAddress.city,
      state: state
    };

    const street: StreetDto = {
      name: formAddress.street,
      city: city
    };
    
    const address: AddressDto = {
      apartmentNumber: formAddress.apartmentNumber,
      buildingNumber: formAddress.buildingNumber,
      entranceNumber: formAddress.entranceNumber,
      houseNumber: formAddress.houseNumber,
      street: street
    };

    const apartment: ApartmentDto = {
      relatedFamily: formData.relatedFamily,
      receiptCode: formData.receiptCode,
      registeredCountPeople: formData.registeredCountPeople,
      address: address
    };

    this.apartmentService.add(apartment).subscribe(result => console.log(result),
      error => console.error(error));
  }

  private updateApartment(data: any): void {
    let apartment = { id: this.id, ... data };
    this.apartmentService.update(this.id, apartment).subscribe(result => console.log(result),
      error => console.error(error));
  }
}
