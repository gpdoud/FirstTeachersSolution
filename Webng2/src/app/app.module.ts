import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ContentComponent } from './content/content.component';
import { ChildrenService } from './children.service';
import { ChildrenListComponent } from './children-list/children-list.component';
import { ChildDetailComponent } from './child-detail/child-detail.component';
import { ChildAddComponent } from './child-add/child-add.component';
import { ChildEditComponent } from './child-edit/child-edit.component';
import { HomeComponent } from './home/home.component';
import { MailingService } from './mailing.service';
import { MailingListComponent } from './mailing-list/mailing-list.component';
import { MailingDetailComponent } from './mailing-detail/mailing-detail.component';
import { MailingEditComponent } from './mailing-edit/mailing-edit.component';
import { MailingAddComponent } from './mailing-add/mailing-add.component';
import { MenuComponent } from './menu.component';
import { MenuListComponent } from './menu-list.component';
import { ParentService } from './parent.service';
import { ParentAddComponent } from './parent-add/parent-add.component';
import { ParentEditComponent } from './parent-edit/parent-edit.component';
import { ParentListComponent } from './parent-list/parent-list.component';
import { ParentDetailComponent } from './parent-detail/parent-detail.component';
import { ScheduleService } from './schedule.service';
import { UserService } from './user.service';
import { UserAddComponent } from './user-add/user-add.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserListComponent } from './user-list/user-list.component';
import { ScheduleListComponent } from './schedule-list/schedule-list.component';
import { ScheduleDetailComponent } from './schedule-detail/schedule-detail.component';
import { ScheduleAddComponent } from './schedule-add/schedule-add.component';
import { ScheduleEditComponent } from './schedule-edit/schedule-edit.component';

@NgModule({
  declarations: [
    AppComponent
    ,ContentComponent
    ,AboutComponent
    ,ChildrenListComponent
    ,ChildDetailComponent
    ,ChildAddComponent
    ,ChildEditComponent
    ,HomeComponent
    ,MailingListComponent  
    ,MailingDetailComponent
    ,MailingEditComponent
    ,MailingAddComponent
    ,MenuComponent
    ,MenuListComponent
    ,ParentAddComponent
    ,ParentEditComponent
    ,ParentListComponent
    ,ParentDetailComponent
    ,UserDetailComponent
    ,UserListComponent
    ,UserEditComponent
    ,UserAddComponent, ScheduleListComponent, ScheduleDetailComponent, ScheduleAddComponent, ScheduleEditComponent
  ],
  imports: [
    BrowserModule
    ,AppRoutingModule
    ,HttpModule
    ,FormsModule
  ],
  providers: [
    MailingService
    ,ParentService
    ,ChildrenService
    ,ScheduleService
  	,UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
