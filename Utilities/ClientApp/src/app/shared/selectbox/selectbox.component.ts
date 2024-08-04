import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-selectbox',
  templateUrl: './selectbox.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: SelectboxComponent
    }
  ],
  styleUrls: ['./selectbox.component.css'],
  inputs: ['url']
})
export class SelectboxComponent implements ControlValueAccessor, OnInit {
  url: string;
  options: string[] = [];
  value: any;

  onChange: any = () => {};
  onTouched: any = () => {};

  constructor(private readonly http: HttpClient) { }

  onSelect(event: any) {
    debugger;
    const value = event.target.value;
    this.value = value;
    this.onChange(value);
    this.onTouched();
  }

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  ngOnInit() {
    this.http.get(`${this.url}`).subscribe({
      next: (result) => {
        for (const location of <any>result) {
          this.options.push(location.name);
        }

        this.value = this.options.length > 0 ? this.options[1] : undefined;
      },
      error: (error: HttpErrorResponse) => console.error(error)
    });
  }
}
