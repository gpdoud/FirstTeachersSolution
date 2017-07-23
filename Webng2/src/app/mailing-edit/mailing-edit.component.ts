import { Component, Input, Output, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { MailingService } from '../mailing.service';

import 'rxjs/add/operator/switchMap';

import { Mailing } from '../mailing';

@Component({
  selector: 'app-mailing-edit',
  templateUrl: './mailing-edit.component.html',
  styleUrls: ['./mailing-edit.component.css']
})
export class MailingEditComponent implements OnInit {

	mailing: Mailing;

	constructor(private mailingSvc: MailingService, private route: ActivatedRoute, private router: Router) {}

	update() {
		this.mailingSvc.change(this.mailing).then(
			resp => this.logAndNav(resp)
		)
	}

	logAndNav(resp) {
		console.log(resp),
		this.router.navigate(['/mailing/list'])
	}

	ngOnInit() {
		this.route.paramMap
			.switchMap((params: ParamMap) =>
				this.mailingSvc.get(params.get('id')))
			.subscribe((mailing: Mailing) => this.mailing = mailing);
	}

  	get diagnostic() { return JSON.stringify(this.mailing); }


}
