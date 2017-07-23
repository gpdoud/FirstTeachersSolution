using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FirstTeachersProject.Models {
	public class Schedule {
		public int Id { get; set; }
		public DateTime DateToMail { get; set; }
		public DateTime? DateMailed { get; set; }

		public int ChildId { get; set; }
		public virtual Child Child { get; set; }
		public int MailingId { get; set; }
		public virtual Mailing Mailing { get; set; }

		public void Clone(Schedule schedule) {
			this.Id = schedule.Id;
			this.DateToMail = schedule.DateToMail;
			this.DateMailed = schedule.DateMailed;
			this.ChildId = schedule.ChildId;
			this.MailingId = schedule.MailingId;
		}
	}
}