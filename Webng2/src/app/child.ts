export class Child {
	Id: number;
	Name: string;
	DateBaptized: Date;
	ParentId: number;
	Active: boolean;
	DateCreated: Date;
	DateUpdated: Date;

	constructor(
		Id: number,
		Name: string,
		DateBaptized: Date,
		ParentId: number,
		Active: boolean,
		DateCreated: Date,
		DateUpdated: Date	
	) {
		this.Id = Id;
		this.Name = Name;
		this.DateBaptized = DateBaptized;
		this.ParentId = ParentId
		this.Active = Active;
		this.DateCreated = DateCreated;
		this.DateUpdated = DateUpdated;
	}
}