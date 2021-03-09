// import { Component, OnInit } from '@angular/core';
//
// @Component({
//   selector: 'app-timelines',
//   templateUrl: './timelines.component.html',
//   styleUrls: ['./timelines.component.css']
// })
// export class TimelinesComponent implements OnInit {
//
//   constructor() { }
//
//   ngOnInit(): void {
//   }
//
// }
import { Component, OnInit } from '@angular/core';
import {DateUtilService} from "../date-util.service";

@Component({
  selector: 'app-timelines',
  templateUrl: './timelines.component.html',
  styleUrls: ['./timelines.component.css']
})
export class TimelinesComponent implements OnInit {
  output : string | undefined;
  constructor(private dateUtilService: DateUtilService) { }

  ngOnInit() {
  }

  onChange(value :any) {
    console.log(value);
    this.output = this.dateUtilService.getDiffToNow(value.value);
  }

}
