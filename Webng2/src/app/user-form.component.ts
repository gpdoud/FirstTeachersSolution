import { Component } from '@angular/core';

import { User } from './user';

@Component({
	selector: 'user-form'
	,templateUrl: './user-form.component.html'
})
export class UserFormComponent {

	user = new User(0, 'John', 'Doe', 'jdoe', 'pass', 'jdoe@a.com', false, true, new Date('July 17, 2017 14:00:00'), null, null); 

	submitted = false;

	OnSubmit() {
		this.submitted = true;
	}

	// TODO: Remove this when we're done
  	get diagnostic() { return JSON.stringify(this.user); }
};