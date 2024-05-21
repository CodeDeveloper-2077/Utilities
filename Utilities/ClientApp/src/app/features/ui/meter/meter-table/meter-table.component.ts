import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MeterDto } from 'src/app/core/Models/MeterDto';
import { GenericRestService } from 'src/app/core/services/generic-rest.service';

@Component({
  selector: 'app-meter-table',
  templateUrl: './meter-table.component.html',
  styleUrls: ['./meter-table.component.css']
})
export class MeterTableComponent implements OnInit {
  public meters: MeterDto[] = [];
  
  constructor(@Inject('meterService') private readonly meterService: GenericRestService<MeterDto>,
              private readonly router: Router) { }

  public ngOnInit(): void {
    this.meterService.getAll().subscribe(result => {
      this.meters = result;
    },
      error => console.error(error));
  }

  public addBtn(): void {
    this.router.navigate(['/meters/add']);
  }

  public updateBtn(id: number): void {
    this.router.navigate([`/meters/edit/`, id]);
  }

  public removeBtn(id: number): void {
    if(confirm("Are you sure about removing meter?")) {
      this.meterService.delete(id).subscribe(result => console.log(`${result} has been deleted`),
        error => console.error(error));
    }
  }
}
