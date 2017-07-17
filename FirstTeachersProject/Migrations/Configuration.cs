namespace FirstTeachersProject.Migrations
{
	using FirstTeachersProject.Models;
	using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<FirstTeachersProject.Models.FirstTeachersContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(FirstTeachersProject.Models.FirstTeachersContext context)
        {
			//  This method will be called after migrating to the latest version.

			context.Users.AddOrUpdate(
				u => u.UserName, 
				new User { FirstName = "Greg", LastName = "Doud", UserName = "saadmin", Password = "radioham"
						, Email = "gpdoud@gmail.com", IsAdmin = true, Active = true
						, DateCreated = new DateTime(1957, 8, 27) }
			);

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method 
            //  to avoid creating duplicate seed data. E.g.
            //
            //    context.People.AddOrUpdate(
            //      p => p.FullName,
            //      new Person { FullName = "Andrew Peters" },
            //      new Person { FullName = "Brice Lambson" },
            //      new Person { FullName = "Rowan Miller" }
            //    );
            //
        }
    }
}
