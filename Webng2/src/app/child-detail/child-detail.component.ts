import { Component, Input, Output, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ChildrenService } from '../children.service';

import 'rxjs/add/operator/switchMap';

import { Child } from '../child';

@Component({
  selector: 'app-child-detail',
  templateUrl: './child-detail.component.html',
  styleUrls: ['./child-detail.component.css']
})
export class ChildDetailComponent implements OnInit {

	@Output() editable: string = ''; // 'disabled';

	@Input() child: Child;

	constructor(private childrenSvc: ChildrenService, private route: ActivatedRoute, private router: Router) {}

	remove(id) {
		this.childrenSvc.remove(id).then(
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
				this.childrenSvc.get(params.get('id')))
			.subscribe((child: Child) => this.child = child);
	}

}
