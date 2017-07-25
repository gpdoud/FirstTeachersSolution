import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { ScheduleService } from '../schedule.service';
import { Schedule } from '../schedule';
import { ChildrenService } from '../children.service';
import { Child } from '../child';
import { MailingService } from '../mailing.service';
import { Mailing } from '../mailing';

@Component({
  selector: 'app-schedule-add',
  templateUrl: './schedule-add.component.html',
  styleUrls: ['./schedule-add.component.css']
})
export class ScheduleAddComponent implements OnInit {

	schedule = new Schedule(0, new Date(), null, 0, 0, true, new Date(), null);

	children: Child[];
	mailings: Mailing[];

	constructor(private scheduleSvc: ScheduleService, private childrenSvc: ChildrenService, 
		private mailingSvc: MailingService, private router: Router) {}

	getChildren(): void {
		this.childrenSvc.list().then(
			resp => this.children = resp
		);
	}

	getMailings(): void {
		this.mailingSvc.list().then(
			resp => this.mailings = resp
		);
	}

	OnSubmit() {
		this.scheduleSvc.add(this.schedule).then(
			resp => this.logAndNav(resp)
		);
	}

	logAndNav(resp) {
		console.log(resp),
		this.router.navigate(['/schedule/list'])
	}

	ngOnInit() {
		this.getChildren();
		this.getMailings();
	}

	// TODO: Remove this when we're done
  	get diagnostic() { return JSON.stringify(this.schedule); }

}
