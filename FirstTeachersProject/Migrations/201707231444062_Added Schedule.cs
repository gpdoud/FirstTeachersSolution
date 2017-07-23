namespace FirstTeachersProject.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddedSchedule : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Schedules",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        DateToMail = c.DateTime(nullable: false),
                        DateMailed = c.DateTime(),
                        ChildId = c.Int(nullable: false),
                        MailingId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Children", t => t.ChildId, cascadeDelete: true)
                .ForeignKey("dbo.Mailings", t => t.MailingId, cascadeDelete: true)
                .Index(t => t.ChildId)
                .Index(t => t.MailingId);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Schedules", "MailingId", "dbo.Mailings");
            DropForeignKey("dbo.Schedules", "ChildId", "dbo.Children");
            DropIndex("dbo.Schedules", new[] { "MailingId" });
            DropIndex("dbo.Schedules", new[] { "ChildId" });
            DropTable("dbo.Schedules");
        }
    }
}
