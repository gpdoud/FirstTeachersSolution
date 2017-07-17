import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { User } from './user';

@Injectable()
export class UserService {

	user: User

	users: User[] = [
		new User(1,'Super','Admin','sa','sa','sa@sa.com',true,true, new Date("July 16, 2017 12:00:00"), null, null)
	];

	getUsersStatic(): User[] {
		return this.users;
	}
	constructor(private http: Http) {}

	getUser(id): Promise<User> {
		return this.http.get('http://localhost:50814/Users/Get/'+id)
			.toPromise()
			.then(resp => resp.json() as User)
			.catch(this.handleError);	
	}

	getUsers(): Promise<User[]> {
		return this.http.get('http://localhost:50814/Users/List')
			.toPromise()
			.then(resp => resp.json() as User[])
			.catch(this.handleError);	
	}

	private handleError(error: any): Promise<any> {
		console.error('An error has occurred', error);
		return Promise.reject(error.message || error);
	}
};