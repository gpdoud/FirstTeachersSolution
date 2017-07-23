namespace FirstTeachersProject.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddedMailingmodelandcontroller : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Mailings",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(nullable: false, maxLength: 50),
                        MailAfterMonths = c.Int(nullable: false),
                        Active = c.Boolean(nullable: false),
                        DateCreated = c.DateTime(nullable: false),
                        DateUpdated = c.DateTime(),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Mailings");
        }
    }
}
