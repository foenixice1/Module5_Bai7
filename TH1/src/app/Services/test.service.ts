import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() { }

  showDate() {
    let today = new Date();
    return today;
  }
}
