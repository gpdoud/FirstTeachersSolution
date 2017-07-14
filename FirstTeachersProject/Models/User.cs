using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FirstTeachersProject.Models {

	public class User {
		public int Id { get; set; }
		public string FirstName { get; set; }
		public string LastName { get; set; }
		public string UserName { get; set; }
		public string Password { get; set; }
		public string Email { get; set; }
		public bool Active { get; set; }
		public DateTime DateCreated { get; set; }
		public DateTime DateUpdated { get; set; }

		public void Clone(User user) {
			this.FirstName = user.FirstName;
			this.LastName = user.LastName;
			this.UserName = user.UserName;
			this.Password = user.Password;
			this.Email = user.Email;
			this.Active = user.Active;
			this.DateCreated = user.DateCreated;
			this.DateUpdated = user.DateUpdated;
		}
	}
}