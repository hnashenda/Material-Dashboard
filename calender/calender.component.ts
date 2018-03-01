import { Component, OnInit } from '@angular/core';
import {MdDatepickerModule} from '@angular/material';


@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css']
})
export class CalenderComponent implements OnInit {

	  startDate = new Date(1990, 0, 1);

  constructor() { }

  ngOnInit() {
  }

}
