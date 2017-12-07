import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import * as moment from 'moment';
import { ScheduleDay } from '../shared/day.class';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private today:ScheduleDay;
  private timeRemaining:string;
  private s_start:string= '5:00 PM';
  private s_end:string= '11:00 PM';

  private workPlaces = [{id:"1",name:"Time Horton",address:"Hornby",selected:true},
                        {id:"2",name:"Wendy's",address:"Oakville",selected:false}]

  constructor(public navCtrl: NavController) {
    this.today = new ScheduleDay();
  }

  ionViewDidLoad(){
    this.today._date = moment().format('LLL');
    this.s_start = moment().hours(17).format().toString();
    this.s_end = moment().hours(23).format().toString();
    this.timeRemaining = this.getRemainingTime();
  }
  compareFn(e1: any, e2: any): boolean {
    return e1 && e2 ? e1.id === e2.id : e1 === e2;
  }

  getRemainingTime = ():string=>{
    var currentTime = moment();
    var endTime = moment(this.s_end);

    var diffHours = endTime.diff(currentTime,"hours",true);
    var diffMins = endTime.diff(currentTime,"hours",true);
    return ""
  }
}
