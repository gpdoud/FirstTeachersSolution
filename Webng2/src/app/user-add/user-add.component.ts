import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { UserService } from '../user.service';
import { User } from '../user';

@Component({
	selector: 'user-add'
	,templateUrl: './user-add.component.html'
	,providers: [
		UserService
	]
})
export class UserAddComponent implements OnInit {

	user = new User(0, '', '', '', '', '', false, true, new Date(), null, null);

	constructor(private userSvc: UserService, private router: Router) {}

	OnSubmit() {
		this.userSvc.add(this.user).then(
			resp => this.logAndNav(resp)
		);
	}

	logAndNav(resp) {
		console.log(resp),
		this.router.navigate(['/user/list'])
	}

	ngOnInit() {

	}

	// TODO: Remove this when we're done
  	get diagnostic() { return JSON.stringify(this.user); }
};