import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GenericRestService } from 'src/app/shared/services/generic-rest.service';
import { StringConverterService } from 'src/app/shared/services/string-converter.service';

@Component({
  selector: 'app-add-edit-form',
  templateUrl: './add-edit-form.component.html',
  styleUrls: ['./add-edit-form.component.css']
})
export class AddEditFormComponent implements OnInit {
  public form: FormGroup;

  @Input() public formFields: string[];
  @Input() public entityType: string;
  @Input() public genericRestService: GenericRestService<any>;
  
  private id: number;
  private isAddMode: boolean;

  constructor(
              private readonly stringConverter: StringConverterService,
              private readonly fb: FormBuilder,
              private readonly router: Router,
              private readonly route: ActivatedRoute) { }

  public ngOnInit(): void {
    this.form = this.fb.group({});
    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;

    this.formFields.forEach(field => this.form.addControl(field, this.fb.control('')))

    if (!this.isAddMode) {
      this.genericRestService.getById(this.id).subscribe(result => this.form.patchValue(result),
        error => console.error(error));
    }
  }

  public sendData(data: any): void {
    if (this.isAddMode)
      this.createEntity(data);
    else
      this.updateEntity(data);

    this.router.navigate([`/${this.entityType}s`]);
  }

  public getFormattedFields(field: string): string {
    return this.stringConverter.convertFirstLetterToUpper(field);
  }

  private createEntity(data: any): void {
    let entity = { ... data };
    this.genericRestService.add(entity).subscribe(result => console.log(result),
      error => console.error(error));
  }

  private updateEntity(data: any): void {
    let entity = { id: this.id, ... data };
    this.genericRestService.update(this.id, entity).subscribe(result => console.log(result),
      error => console.error(error));
  }
}
