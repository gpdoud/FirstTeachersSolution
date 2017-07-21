namespace FirstTeachersProject.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddedActiveDateCreatedandDateUpdatedtoChild : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Children", "Active", c => c.Boolean(nullable: false));
            AddColumn("dbo.Children", "DateCreated", c => c.DateTime(nullable: false));
            AddColumn("dbo.Children", "DateUpdated", c => c.DateTime());
        }
        
        public override void Down()
        {
            DropColumn("dbo.Children", "DateUpdated");
            DropColumn("dbo.Children", "DateCreated");
            DropColumn("dbo.Children", "Active");
        }
    }
}
