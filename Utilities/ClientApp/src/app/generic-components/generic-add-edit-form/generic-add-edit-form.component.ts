import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GenericRestService } from 'src/app/services/generic-rest.service';

@Component({
  selector: 'app-generic-add-edit-form',
  templateUrl: './generic-add-edit-form.component.html',
  styleUrls: ['./generic-add-edit-form.component.css']
})
export class GenericAddEditFormComponent implements OnInit {
  public form: FormGroup;

  @Input() public formFields: string[];
  @Input() public entityType: string;
  @Input() public genericRestService: GenericRestService<any>;
  
  private id: number;
  private isAddMode: boolean;

  constructor(private readonly fb: FormBuilder,
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
