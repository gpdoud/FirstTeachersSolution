namespace FirstTeachersProject.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddedEmailandPhonetoparent : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Parents", "Email", c => c.String(maxLength: 80));
            AddColumn("dbo.Parents", "Phone", c => c.String(maxLength: 20));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Parents", "Phone");
            DropColumn("dbo.Parents", "Email");
        }
    }
}
