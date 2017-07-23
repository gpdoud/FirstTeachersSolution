import { Component, Input, Output, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { MailingService } from '../mailing.service';

import 'rxjs/add/operator/switchMap';

import { Mailing } from '../mailing';

@Component({
  selector: 'app-mailing-detail',
  templateUrl: './mailing-detail.component.html',
  styleUrls: ['./mailing-detail.component.css']
})
export class MailingDetailComponent implements OnInit {

	@Output() editable: string = ''; // 'disabled';

	@Input() mailing: Mailing;

	constructor(private mailingSvc: MailingService, private route: ActivatedRoute, private router: Router) {}

	remove(id) {
		this.mailingSvc.remove(id).then(
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


}
