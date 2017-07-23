import { Component, OnInit } from '@angular/core';

import { MailingService } from '../mailing.service';
import { Mailing } from '../mailing';

import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-mailing-list',
  templateUrl: './mailing-list.component.html',
  styleUrls: ['./mailing-list.component.css']
  ,providers: [MailingService]
})
export class MailingListComponent implements OnInit {

	title = 'Mailing List';
	
	selectedMailing: Mailing;
	mailings: Mailing[];

	constructor(private mailingSvc: MailingService){}

	getSelectedMailing(mailing: Mailing) {
		this.selectedMailing = mailing;
	}

	getMailings(): void {
		this.mailingSvc.list()
			.then(resp => this.mailings = resp);

		// this will bring back a static Mailing[]
		// this.mailings = this.MailingSvc.getMailingsStatic();
	}

	ngOnInit() {
		this.getMailings();
	}

}
