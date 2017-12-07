import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import * as moment from 'moment';

@Component({
  selector: 'schadule-calendar',
  templateUrl: 'calendar-component.html',
})
export class CalendarComponent {

    public view: string = 'week';
    public viewDate:string;

    constructor(){
        debugger;
        this.viewDate = moment().format('LLL');
    }
}
