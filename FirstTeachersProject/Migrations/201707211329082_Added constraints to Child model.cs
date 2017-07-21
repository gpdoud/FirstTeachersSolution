namespace FirstTeachersProject.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddedconstraintstoChildmodel : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.Children", "Name", c => c.String(nullable: false, maxLength: 30));
        }
        
        public override void Down()
        {
            AlterColumn("dbo.Children", "Name", c => c.String());
        }
    }
}
