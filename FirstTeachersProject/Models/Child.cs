using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace FirstTeachersProject.Models {
	public class Child {
		[Key]
		public int Id { get; set; }
		[MaxLength(30)]
		[Required]
		public string Name { get; set; }
		[Required]
		public DateTime DateBaptized { get; set; }
		[Required]
		public bool Active { get; set; } = true;
		[Required]
		public DateTime DateCreated { get; set; } = DateTime.Now;
		public DateTime? DateUpdated { get; set; } = null;

		[Required]
		public int ParentId { get; set; }
		public virtual Parent Parent { get; set; }

		public void Clone(Child child) {
			this.Id = child.Id;
			this.Name = child.Name;
			this.DateBaptized = child.DateBaptized;
			this.ParentId = child.ParentId;
			this.Active = child.Active;
			this.DateCreated = child.DateCreated;
			this.DateUpdated = child.DateUpdated;
		}
	}
}