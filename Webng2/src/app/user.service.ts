import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';

import { User } from './user';

const urlBase: string = 'http://localhost:50814/';
const mvcCtrl: string = 'Users/';
const url: string = this.urlBase + this.mvcCtrl;

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

	list(): Promise<User[]> {
		return this.http.get(url+'List')
			.toPromise()
			.then(resp => resp.json() as User[])
			.catch(this.handleError);	
	}

	get(id): Promise<User> {
		return this.http.get(url+'Get/'+id)
			.toPromise()
			.then(resp => resp.json() as User)
			.catch(this.handleError);	
	}

	add(user: User): Promise<User> {
		return this.http.post(url+'Add', user)
			.toPromise()
			.then(resp => resp.json() || {})
			.catch(this.handleError);
	}

	change(user: User): Promise<any> {
		return this.http.post(url+'Change', user)
			.toPromise()
			.then(resp => resp.json() || {})
			.catch(this.handleError);
	}

	remove(id): Promise<any> {
		return this.http.get(url+'Remove/'+id)
			.toPromise()
			.then(resp => resp.json() || {})
			.catch(this.handleError);	
	}

	private handleError(error: any): Promise<any> {
		console.error('An error has occurred', error);
		return Promise.reject(error.message || error);
	}
};