import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';

import { Parent } from './parent';

@Injectable() 
export class ParentService {

	private urlBase: string = 'http://localhost:50814/';
	private mvcCtrl: string = 'Parents/';
	private url: string = this.urlBase + this.mvcCtrl;	

	parents: Parent[];

	constructor(private http: Http) {}
	list(): Promise<Parent[]> {
		return this.http.get(this.url+'List')
			.toPromise()
			.then(resp => resp.json() as Parent[])
			.catch(this.handleError);	
	}

	get(id): Promise<Parent> {
		return this.http.get(this.url+'Get/'+id)
			.toPromise()
			.then(resp => resp.json() as Parent)
			.catch(this.handleError);	
	}

	add(parent: Parent): Promise<Parent> {
		return this.http.post(this.url+'Add', parent)
			.toPromise()
			.then(resp => resp.json() || {})
			.catch(this.handleError);
	}

	change(parent: Parent): Promise<any> {
		return this.http.post(this.url+'Change', parent)
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