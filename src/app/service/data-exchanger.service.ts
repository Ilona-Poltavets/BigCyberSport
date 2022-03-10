import {Injectable} from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataExchangerService {
  private data: string;

  constructor() {
  }

  publishData(input: string) {
    this.data = input;
  }

  getData(): string {
    return this.data;
  }
}

