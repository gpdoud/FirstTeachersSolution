import { Component, Input, Output, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ParentService } from './parent.service';

import 'rxjs/add/operator/switchMap';

import { Parent } from './parent';

@Component({
	selector: 'parent-comp'
	,templateUrl: './parent-detail.component.html'
})
export class ParentDetailComponent implements OnInit {

	@Output() editable: string = ''; // 'disabled';

	@Input() parent: Parent;

	constructor(private parentSvc: ParentService, private route: ActivatedRoute, private router: Router) {}

	remove(id) {
		this.parentSvc.remove(id).then(
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

}