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

		public int ParentId { get; set; }
		public virtual Parent Parent { get; set; }

		public void Clone(Child child) {
			this.Id = child.Id;
			this.Name = child.Name;
			this.DateBaptized = child.DateBaptized;
			this.ParentId = child.ParentId;
		}
	}
}