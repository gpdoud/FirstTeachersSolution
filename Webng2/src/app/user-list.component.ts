import { Component, OnInit } from '@angular/core';

import { UserService } from './user.service';
import { User } from './user';

import 'rxjs/add/operator/toPromise';

@Component({
	selector: 'user-list'
	,templateUrl: './user-list.component.html'
	,styles: []
	,providers: [UserService]
})
export class UserListComponent implements OnInit {

	title = 'User List';
	
	selectedUser: User;
	users: User[];

	constructor(private UserSvc: UserService){}

	getSelectedUser(user: User) {
		this.selectedUser = user;
	}

	getUsers(): void {
		this.UserSvc.getUsers()
			.then(resp => this.users = resp);

		// this will bring back a static User[]
		// this.users = this.UserSvc.getUsersStatic();
	}

	ngOnInit() {
		this.getUsers();
	}

}