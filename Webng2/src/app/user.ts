export class User {
	Id: number;
	FirstName: string;
	LastName: string;
	UserName: string;
	Password: string;
	Email: string;
	IsAdmin: boolean;
	Active: boolean;
	DateCreated: Date;
	DateUpdated: Date;
	DateDeleted: Date;

	constructor(Id: number, FirstName: string, LastName: string
				, UserName: string, Password: string
				, Email: string, IsAdmin: boolean, Active: boolean
				, DateCreated: Date, DateUpdated: Date, DateDeleted: Date) {
		this.Id = Id;
		this.FirstName = FirstName;
		this.LastName = LastName;
		this.UserName = UserName;
		this.Password = Password;
		this.Email = Email;
		this.IsAdmin = IsAdmin;
		this.Active = Active;
		this.DateCreated = DateCreated;
		this.DateUpdated = DateUpdated;
		this.DateDeleted = DateDeleted;
	}
}