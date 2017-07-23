using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace FirstTeachersProject.Models {
	public class Mailing {
		public int Id { get; set; }
		[MaxLength(50)]
		[Required]
		public string Name { get; set; }
		public int MailAfterMonths { get; set; }
		public bool Active { get; set; } = true;
		public DateTime DateCreated { get; set; } = DateTime.Now;
		public DateTime? DateUpdated { get; set; }

		public void Clone(Mailing mailing) {
			this.Id = mailing.Id;
			this.Name = mailing.Name;
			this.MailAfterMonths = mailing.MailAfterMonths;
			this.Active = mailing.Active;
			this.DateCreated = mailing.DateCreated;
			this.DateUpdated = mailing.DateUpdated;
		}
	}
}