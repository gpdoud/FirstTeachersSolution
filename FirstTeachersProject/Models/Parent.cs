using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace FirstTeachersProject.Models {
	public class Parent {
		public int Id { get; set; }
		[MaxLength(50)]
		[Required]
		public string Name { get; set; }
		[MaxLength(50)]
		[Required]
		public string Address { get; set; }
		[MaxLength(50)]
		[Required]
		public string City { get; set; } = "Loveland";
		[MaxLength(2)]
		[Required]
		public string State { get; set; } = "OH";
		[MaxLength(10)]
		[Required]
		public string Zip { get; set; } = "45140";
		public bool Active { get; set; } = true;
		public DateTime DateCreated { get; set; } = DateTime.Now;
		public DateTime? DateUpdated { get; set; } = null;

		public void Clone(Parent parent) {
			this.Id = parent.Id;
			this.Name = parent.Name;
			this.Address = parent.Address;
			this.City = parent.City;
			this.State = parent.State;
			this.Zip = parent.Zip;
			this.Active = parent.Active;
			this.DateCreated = parent.DateCreated;
			this.DateUpdated = parent.DateUpdated;
		}
	}
}