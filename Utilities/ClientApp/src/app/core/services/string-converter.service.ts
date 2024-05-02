import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringConverterService {
  public convertFirstLetterToUpper(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}
