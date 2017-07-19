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
  ],
  imports: [
    BrowserModule
    ,AppRoutingModule
    ,HttpModule
    ,FormsModule
  ],
  providers: [
    ParentService
  	,UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
