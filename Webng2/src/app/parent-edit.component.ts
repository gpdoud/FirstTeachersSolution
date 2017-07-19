import { Component, Input, Output, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ParentService } from './parent.service';

import 'rxjs/add/operator/switchMap';

import { Parent } from './parent';

@Component({
	selector: 'parent-edit-comp'
	,templateUrl: './parent-edit.component.html'
	,styleUrls: ['./parent-edit.component.css']
	,providers: [ParentService]
})
export class ParentEditComponent implements OnInit {

	@Output() editable: string = ''; // 'disabled';

	parent: Parent;

	constructor(private parentSvc: ParentService, private route: ActivatedRoute, private router: Router) {}

	update() {
		this.parentSvc.change(this.parent).then(
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
				this.parentSvc.get(params.get('id')))
			.subscribe((parent: Parent) => this.parent = parent);
	}

  	get diagnostic() { return JSON.stringify(this.parent); }

}