export class Schedule {
	Id: number;
	DateToMail: Date;
	DateMailed: Date;
	ChildId: number;
	MailingId: number;
	Active: boolean;
	DateCreated: Date;
	DateUpdated: Date;

	constructor(
		Id: number,
		DateToMail: Date,
		DateMailed: Date,
		ChildId: number,
		MailingId: number,
		Active: boolean,
		DateCreated: Date,
		DateUpdated: Date
	) {
		this.Id = Id;
		this.DateToMail = DateToMail;
		this.DateMailed = DateMailed;
		this.ChildId = ChildId;
		this.MailingId = MailingId;
		this.Active =Active
		this.DateCreated = DateCreated;
		this.DateUpdated = DateUpdated;
	}
}