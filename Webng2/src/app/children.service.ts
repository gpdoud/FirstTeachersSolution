import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';

import { Child } from './child';

const urlBase = 'http://localhost:50814/';
const mvcCtrl = 'Children/';
const url: string = urlBase + mvcCtrl;

@Injectable()
export class ChildrenService {

	children: Child[];

	constructor(private http: Http) {}

	schedule(id): Promise<any> {
		return this.http.get(url+'ScheduleMailings/'+id)
			.toPromise()
			.then(resp => resp.json()  || {})
			.catch(this.handleError);
	}
	list(): Promise<Child[]> {
		return this.http.get(url+'List')
			.toPromise()
			.then(resp => resp.json() as Child[])
			.catch(this.handleError);	
	}

	get(id): Promise<Child> {
		return this.http.get(url+'Get/'+id)
			.toPromise()
			.then(resp => resp.json() as Child)
			.catch(this.handleError);	
	}

	add(child: Child): Promise<Child> {
		return this.http.post(url+'Add', child)
			.toPromise()
			.then(resp => resp.json() || {})
			.catch(this.handleError);
	}

	change(child: Child): Promise<any> {
		return this.http.post(url+'Change', child)
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
}
