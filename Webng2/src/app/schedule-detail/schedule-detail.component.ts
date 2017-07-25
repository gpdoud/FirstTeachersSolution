import { Component, Input, Output, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ScheduleService } from '../schedule.service';

import 'rxjs/add/operator/switchMap';

import { Schedule } from '../schedule';
@Component({
  selector: 'app-schedule-detail',
  templateUrl: './schedule-detail.component.html',
  styleUrls: ['./schedule-detail.component.css']
})
export class ScheduleDetailComponent implements OnInit {

	@Output() editable: string = ''; // 'disabled';

	@Input() schedule: Schedule;

	constructor(private scheduleSvc: ScheduleService, private route: ActivatedRoute, private router: Router) {}

	remove(id) {
		this.scheduleSvc.remove(id).then(
			resp => this.logAndNav(resp)
		)
	}

	logAndNav(resp) {
		console.log(resp),
		this.router.navigate(['/parent/list'])
	}

	ngOnInit() {
		this.route.paramMap
			.switchMap((params: ParamMap) =>
				this.scheduleSvc.get(params.get('id')))
			.subscribe((schedule: Schedule) => this.schedule = schedule);
	}

}
