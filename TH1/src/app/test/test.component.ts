import { Component, OnInit } from '@angular/core';
import {TestService} from "../Services/test.service";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  comment: string = 'Bây giờ là';
  newToday!: Date;

  constructor(private today: TestService) { }

  ngOnInit(): void {
    this.newToday = this.today.showDate();
  }

}
