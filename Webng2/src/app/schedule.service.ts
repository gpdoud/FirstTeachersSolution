import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';

import { Schedule } from './schedule';

@Injectable() 
export class ScheduleService {

	private urlBase: string = 'http://localhost:50814/';
	private mvcCtrl: string = 'Schedules/';
	private url: string = this.urlBase + this.mvcCtrl;	

	schedule: Schedule[];

	constructor(private http: Http) {}
	list(): Promise<Schedule[]> {
		return this.http.get(this.url+'List')
			.toPromise()
			.then(resp => resp.json() as Schedule[])
			.catch(this.handleError);	
	}

	get(id): Promise<Schedule> {
		return this.http.get(this.url+'Get/'+id)
			.toPromise()
			.then(resp => resp.json() as Schedule)
			.catch(this.handleError);	
	}

	add(schedule: Schedule): Promise<Schedule> {
		return this.http.post(this.url+'Add', schedule)
			.toPromise()
			.then(resp => resp.json() || {})
			.catch(this.handleError);
	}

	change(schedule: Schedule): Promise<any> {
		return this.http.post(this.url+'Change', schedule)
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