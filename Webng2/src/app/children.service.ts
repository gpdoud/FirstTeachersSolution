import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';

import { Child } from './child';

@Injectable() 
export class ChildrenService {

	private urlBase: string = 'http://localhost:50814/';
	private mvcCtrl: string = 'Children/';
	private url: string = this.urlBase + this.mvcCtrl;	

	children: Child[];

	constructor(private http: Http) {}
	list(): Promise<Child[]> {
		return this.http.get(this.url+'List')
			.toPromise()
			.then(resp => resp.json() as Child[])
			.catch(this.handleError);	
	}

	get(id): Promise<Child> {
		return this.http.get(this.url+'Get/'+id)
			.toPromise()
			.then(resp => resp.json() as Child)
			.catch(this.handleError);	
	}

	add(child: Child): Promise<Child> {
		return this.http.post(this.url+'Add', child)
			.toPromise()
			.then(resp => resp.json() || {})
			.catch(this.handleError);
	}

	change(child: Child): Promise<any> {
		return this.http.post(this.url+'Change', child)
			.toPromise()
			.then(resp => resp.json() || {})
			.catch(this.handleError);
	}

	remove(id): Promise<any> {
		return this.http.get(this.url+'Remove/'+id)
			.toPromise()
			.then(resp => resp.json() || {})
			.catch(this.handleError);	
	}

	private handleError(error: any): Promise<any> {
		console.error('An error has occurred', error);
		return Promise.reject(error.message || error);
	}
}