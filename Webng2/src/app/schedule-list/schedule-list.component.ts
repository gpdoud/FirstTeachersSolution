import { Component, OnInit } from '@angular/core';

import { ScheduleService } from '../schedule.service';
import { Schedule } from '../schedule';

@Component({
  selector: 'app-schedule-list',
  templateUrl: './schedule-list.component.html',
  styleUrls: ['./schedule-list.component.css']
})
export class ScheduleListComponent implements OnInit {

	title = 'Schedule List';

	schedules: Schedule[];

	constructor(private scheduleSvc: ScheduleService) {}

	getSchedule(): void {
		this.scheduleSvc.list().then(
			resp => this.schedules = resp
		)
	}

	ngOnInit() {
		this.getSchedule();
	}

}
