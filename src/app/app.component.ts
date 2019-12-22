import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { HttpClient } from '@angular/common/http';
import { GreetingService } from './service/greeting.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  date: any;

  constructor(private readonly greetService: GreetingService) {
  }
  ngOnInit(): void {
    // moment.locale('fr');
    // this.date = moment().format('MMMM');
  }
  getGreeting() {
    this.greetService.getGreeting();
  }
}
