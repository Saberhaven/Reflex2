import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stale-dates',
  templateUrl: './stale-dates.component.html',
  styleUrls: ['./stale-dates.component.css']
})
export class StaleDatesComponent implements OnInit {
  now: Date;
  constructor() {
    this.now = new Date();
   }

  ngOnInit() {
  }

}
