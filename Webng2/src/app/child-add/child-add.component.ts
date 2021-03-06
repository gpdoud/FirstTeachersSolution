import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { ChildrenService } from '../children.service';
import { Child } from '../child';
import { ParentService } from '../parent.service';
import { Parent } from '../parent';

@Component({
  selector: 'child-add',
  templateUrl: './child-add.component.html',
  styleUrls: ['./child-add.component.css']
  ,providers: []
})
export class ChildAddComponent implements OnInit {

	child = new Child(0, '', new Date(), 0, true, new Date(), null);

	parents;

	constructor(private childrenSvc: ChildrenService, private parentSvc: ParentService, private router: Router) {}

	getParents(): void {
		this.parentSvc.list().then(
			resp => this.parents = resp
		);
	}

	OnSubmit() {
		this.childrenSvc.add(this.child).then(
			resp => this.logAndNav(resp)
		);
	}

	logAndNav(resp) {
		console.log(resp),
		this.router.navigate(['/child/list'])
	}

	ngOnInit() {
		this.getParents();
	}

	// TODO: Remove this when we're done
  	get diagnostic() { return JSON.stringify(this.child); }

}
