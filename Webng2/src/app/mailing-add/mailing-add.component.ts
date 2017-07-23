import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { MailingService } from '../mailing.service';
import { Mailing } from '../mailing';

@Component({
  selector: 'app-mailing-add',
  templateUrl: './mailing-add.component.html',
  styleUrls: ['./mailing-add.component.css']
})
export class MailingAddComponent implements OnInit {

	mailing = new Mailing(0, '', 0, true, new Date(), null);

	constructor(private mailingSvc: MailingService, private router: Router) {}

	OnSubmit() {
		this.mailingSvc.add(this.mailing).then(
			resp => this.logAndNav(resp)
		);
	}

	logAndNav(resp) {
		console.log(resp),
		this.router.navigate(['/mailing/list'])
	}

	ngOnInit() {

	}

	// TODO: Remove this when we're done
  	get diagnostic() { return JSON.stringify(this.mailing); }

}
