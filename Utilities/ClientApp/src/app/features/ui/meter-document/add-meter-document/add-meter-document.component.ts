import { HttpClient, HttpErrorResponse, HttpEventType } from '@angular/common/http';
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-meter-document',
  templateUrl: './add-meter-document.component.html',
  styleUrls: ['./add-meter-document.component.css']
})
export class AddMeterDocumentComponent {
  public progress: number;
  public message: string;
  @Output() public onUploadFinished = new EventEmitter();

  constructor(private readonly http: HttpClient) { }

  public uploadFile = (files): void => {
    if (files.length === 0) {
      return;
    }

    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);

    this.http.post("https://localhost:7202/api/meterdocument", formData, { reportProgress: true, observe: 'events' }).subscribe({
      next: (event) => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progress = Math.round(100 * event.loaded / event.total);
        }
        else if (event.type === HttpEventType.Response) {
          this.message = 'Upload success.';
          this.onUploadFinished.emit(event.body);
        }
      },
      error: (error: HttpErrorResponse) => console.error(error)
    });
  }
}