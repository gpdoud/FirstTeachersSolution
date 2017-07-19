import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { ParentService } from './parent.service';
import { Parent } from './parent';

@Component({
	selector: 'parent-add'
	,templateUrl: './parent-add.component.html'
	,styleUrls: ['./parent-add.component.css']
	,providers: [
		ParentService
	]
})
export class ParentAddComponent implements OnInit {

	parent = new Parent(0, '', '', 'Loveland', 'OH', '45140', '', '', true, new Date(), null);

	constructor(private parentSvc: ParentService, private router: Router) {}

	OnSubmit() {
		this.parentSvc.add(this.parent).then(
			resp => this.logAndNav(resp)
		);
	}

	logAndNav(resp) {
		console.log(resp),
		this.router.navigate(['/parent/list'])
	}

	ngOnInit() {

	}

	// TODO: Remove this when we're done
  	get diagnostic() { return JSON.stringify(this.parent); }
};