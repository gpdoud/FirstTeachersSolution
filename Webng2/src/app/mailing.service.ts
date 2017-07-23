import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';

import { Mailing } from './mailing';

@Injectable()
export class MailingService {

	private urlBase: string = 'http://localhost:50814/';
	private mvcCtrl: string = 'Mailings/';
	private url: string = this.urlBase + this.mvcCtrl;

	mailing: Mailing

	mailings: Mailing[] = [
		new Mailing(0,'Super', 0, true, new Date("July 16, 2017 12:00:00"), null)
	];

	getMailingsStatic(): Mailing[] {
		return this.mailings;
	}
	constructor(private http: Http) {}

	list(): Promise<Mailing[]> {
		return this.http.get(this.url+'List')
			.toPromise()
			.then(resp => resp.json() as Mailing[])
			.catch(this.handleError);	
	}

	get(id): Promise<Mailing> {
		return this.http.get(this.url+'Get/'+id)
			.toPromise()
			.then(resp => resp.json() as Mailing)
			.catch(this.handleError);	
	}

	add(mailing: Mailing): Promise<Mailing> {
		return this.http.post(this.url+'Add', mailing)
			.toPromise()
			.then(resp => resp.json() || {})
			.catch(this.handleError);
	}

	change(mailing: Mailing): Promise<any> {
		return this.http.post(this.url+'Change', mailing)
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
};