import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AboutComponent } from './about.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ContentComponent } from './content.component';
import { HomeComponent } from './home.component';
import { MenuComponent } from './menu.component';
import { MenuListComponent } from './menu-list.component';
import { ParentService } from './parent.service';
import { ParentAddComponent } from './parent-add.component';
import { ParentEditComponent } from './parent-edit.component';
import { ParentListComponent } from './parent-list.component';
import { ParentDetailComponent } from './parent-detail.component';
import { UserService } from './user.service';
import { UserAddComponent } from './user-add.component';
import { UserDetailComponent } from './user-detail.component';
import { UserEditComponent } from './user-edit.component';
import { UserListComponent } from './user-list.component';
import { Child } from './child';
import { ChildrenService } from './children.service';
import { ChildrenListComponent } from './children-list/children-list.component';
import { ChildDetailComponent } from './child-detail/child-detail.component';
import { ChildAddComponent } from './child-add/child-add.component';

@NgModule({
  declarations: [
    AppComponent
    ,ContentComponent
    ,HomeComponent
    ,AboutComponent
    ,MenuComponent
    ,MenuListComponent
    ,ParentAddComponent
    ,ParentEditComponent
    ,ParentListComponent
    ,ParentDetailComponent
    ,UserDetailComponent
    ,UserListComponent
    ,UserEditComponent
    ,UserAddComponent
    ,ChildrenListComponent, ChildDetailComponent, ChildAddComponent	
  ],
  imports: [
    BrowserModule
    ,AppRoutingModule
    ,HttpModule
    ,FormsModule
  ],
  providers: [
    ParentService
    ,ChildrenService
  	,UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
