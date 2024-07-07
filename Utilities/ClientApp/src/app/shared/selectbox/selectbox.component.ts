import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { AppSettings } from 'src/app/core/constants/AppSettings';

@Component({
  selector: 'app-selectbox',
  templateUrl: './selectbox.component.html',
  styleUrls: ['./selectbox.component.css'],
})
export class SelectboxComponent implements OnInit {
  @Input() public name: string;
  @Input() public url: string;
  
  public selectedOption: string;
  public entities: [{ name: string }];

  constructor(private readonly http: HttpClient) { }

  ngOnInit() {
    alert("ngOnInit has been invoked!");
    this.http.get(`${this.url}`).subscribe({
      next: (result) => {
        this.entities = <any>result;
        this.selectedOption = this.entities.length > 0 ? this.entities[0].name : '';
        console.log(this.entities);
      },
      error: (error: HttpErrorResponse) => console.error(error)
    });
  }
}
