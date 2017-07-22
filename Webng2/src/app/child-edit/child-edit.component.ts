import { Component, Input, Output, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ChildrenService } from '../children.service';
import { ParentService } from '../parent.service';

import 'rxjs/add/operator/switchMap';

import { Child } from '../child';
import { Parent } from '../parent';

@Component({
  selector: 'child-edit',
  templateUrl: './child-edit.component.html',
  styleUrls: ['./child-edit.component.css']
})
export class ChildEditComponent implements OnInit {

	@Output() editable: string = ''; // 'disabled';

	child: Child;
	parents: Parent[];

	constructor(private childrenSvc: ChildrenService, private parentSvc: ParentService
		,private route: ActivatedRoute, private router: Router) {}

	update() {
		this.childrenSvc.change(this.child).then(
			resp => this.logAndNav(resp)
		)
	}

	logAndNav(resp) {
		console.log(resp),
		this.router.navigate(['/child/list'])
	}

	getParents(): void {
		this.parentSvc.list().then(
			resp => this.parents = resp
		);
	}

	ngOnInit() {
		this.route.paramMap
			.switchMap((params: ParamMap) =>
				this.childrenSvc.get(params.get('id')))
			.subscribe((child: Child) => this.child = child);

		this.getParents();
	}

  	get diagnostic() { return JSON.stringify(this.child); }


}
