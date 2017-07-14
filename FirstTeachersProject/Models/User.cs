using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace FirstTeachersProject.Models {

	public class User {
		[Key]
		public int Id { get; set; }
		[MaxLength(50)]
		[Required]
		public string FirstName { get; set; }
		[MaxLength(50)]
		[Required]
		public string LastName { get; set; }
		[MaxLength(50)]
		[Required]
		public string UserName { get; set; }
		[MaxLength(50)]
		public string Password { get; set; }
		[MaxLength(255)]
		[Required]
		[EmailAddress]
		public string Email { get; set; }
		public bool IsAdmin { get; set; }
		public bool Active { get; set; }
		public DateTime DateCreated { get; set; }
		public DateTime? DateUpdated { get; set; }
		public DateTime? DateDeleted { get; set; }
		[Timestamp]
		public byte[] Timestamp { get; set; }

		public void Clone(User user) {
			this.FirstName = user.FirstName;
			this.LastName = user.LastName;
			this.UserName = user.UserName;
			this.Password = user.Password;
			this.Email = user.Email;
			this.IsAdmin = user.IsAdmin;
			this.Active = user.Active;
			this.DateCreated = user.DateCreated;
			this.DateUpdated = user.DateUpdated;
		}
	}
}