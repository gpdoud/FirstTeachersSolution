import { Component, Input, Output, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserService } from './user.service';

import 'rxjs/add/operator/switchMap';

import { User } from './user';

@Component({
	selector: 'user-comp'
	,templateUrl: './user-detail.component.html'
})
export class UserDetailComponent implements OnInit {

	@Output() editable: string = ''; // 'disabled';

	@Input() user: User;

	constructor(private userSvc: UserService, private route: ActivatedRoute, private router: Router) {}

	remove(id) {
		this.userSvc.remove(id).then(
			resp => this.logAndNav(resp)
		)
	}

	logAndNav(resp) {
		console.log(resp),
		this.router.navigate(['/user/list'])
	}

	ngOnInit() {
		this.route.paramMap
			.switchMap((params: ParamMap) =>
				this.userSvc.get(params.get('id')))
			.subscribe((user: User) => this.user = user);
	}

}