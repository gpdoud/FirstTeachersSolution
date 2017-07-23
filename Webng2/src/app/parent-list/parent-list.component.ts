import { Component, OnInit } from '@angular/core';

import { ParentService } from '../parent.service';
import { Parent } from '../parent';

@Component({
	selector: 'parent-list'
	,templateUrl: './parent-list.component.html'
	,styleUrls: ['./parent-list.component.css']
	,providers: [ParentService]
})
export class ParentListComponent implements OnInit {

	title = 'Parent List';

	parents: Parent[];

	constructor(private parentSvc: ParentService) {}

	getParents(): void {
		this.parentSvc.list().then(
			resp => this.parents = resp
		)
	}

	ngOnInit() {
		this.getParents();
	}
};