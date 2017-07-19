export class Parent {
	Id: number;
	Name: string;
	Address: string;
	City: string;
	State: string;
	Zip: string;
	Email: string;
	Phone: string;
	Active: boolean;
	DateCreated: Date;
	DateUpdated: Date;

	constructor(Id: number, Name: string, Address: string, City: string, State: string
		, Zip: string, Email: string, Phone: string, Active: boolean, DateCreated: Date, DateUpdated: Date) {
		this.Id = Id;
		this.Name = Name;
		this.Address = Address;
		this.City = City;
		this.State = State;
		this.Zip = Zip;
		this.Email = Email;
		this.Phone = Phone;
		this.Active = Active;
		this.DateCreated = DateCreated;
		this.DateUpdated = DateUpdated;	
	}
}