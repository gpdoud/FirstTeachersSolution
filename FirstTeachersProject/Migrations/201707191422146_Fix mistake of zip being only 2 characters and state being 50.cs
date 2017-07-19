namespace FirstTeachersProject.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Fixmistakeofzipbeingonly2charactersandstatebeing50 : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.Parents", "State", c => c.String(nullable: false, maxLength: 2));
            AlterColumn("dbo.Parents", "Zip", c => c.String(nullable: false, maxLength: 10));
        }
        
        public override void Down()
        {
            AlterColumn("dbo.Parents", "Zip", c => c.String(nullable: false, maxLength: 2));
            AlterColumn("dbo.Parents", "State", c => c.String(nullable: false, maxLength: 50));
        }
    }
}
