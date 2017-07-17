import { Component, Input, Output, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserService } from './user.service';

import 'rxjs/add/operator/switchMap';

import { User } from './user';

@Component({
	selector: 'user-comp'
	,templateUrl: 'user.component.html'
})
export class UserComponent implements OnInit {

	@Output() editable: string = 'disabled';

	@Input() user: User;

	constructor(private userSvc: UserService, private route: ActivatedRoute, private router: Router) {}

	ngOnInit() {
		this.route.paramMap
			.switchMap((params: ParamMap) =>
				this.userSvc.getUser(params.get('id')))
			.subscribe((user: User) => this.user = user);
	}

}