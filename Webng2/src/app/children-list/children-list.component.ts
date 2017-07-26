import { Component, OnInit } from '@angular/core';

import { ChildrenService } from '../children.service';
import { Child } from '../child';

@Component({
  selector: 'children-list',
  templateUrl: './children-list.component.html',
  styleUrls: ['./children-list.component.css']
})
export class ChildrenListComponent implements OnInit {

	title = 'Children List';

	children: Child[];

	constructor(private childSvc: ChildrenService) {}

	getChildren(): void {
		this.childSvc.list().then(
			resp => this.children = resp
		)
	}

	scheduleMailings(childId): void {
		this.childSvc.schedule(childId).then(
			resp => console.log("ScheduleMailings", resp)
		)
	}

	ngOnInit() {
		this.getChildren();
	}

}
