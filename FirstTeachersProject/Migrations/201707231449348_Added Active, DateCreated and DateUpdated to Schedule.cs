namespace FirstTeachersProject.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddedActiveDateCreatedandDateUpdatedtoSchedule : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Schedules", "Active", c => c.Boolean(nullable: false));
            AddColumn("dbo.Schedules", "DateCreated", c => c.DateTime(nullable: false));
            AddColumn("dbo.Schedules", "DateUpdated", c => c.DateTime());
        }
        
        public override void Down()
        {
            DropColumn("dbo.Schedules", "DateUpdated");
            DropColumn("dbo.Schedules", "DateCreated");
            DropColumn("dbo.Schedules", "Active");
        }
    }
}
