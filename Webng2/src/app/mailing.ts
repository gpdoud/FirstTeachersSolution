export class Mailing {
	Id: number;
	Name: string;
	MailAfterMonths: number;
	Active: boolean;
	DateCreated: Date;
	DateUpdated: Date;

	constructor(	
		Id: number
		,Name: string
		,MailAfterMonths: number
		,Active: boolean
		,DateCreated: Date
		,DateUpdated: Date
	) {
		this.Id = Id;
		this.Name = Name;
		this.MailAfterMonths = MailAfterMonths;
		this.Active = Active;
		this.DateCreated = DateCreated;
		this.DateUpdated = DateUpdated;
	}
}