import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MenuComponent } from './menu.component';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about.component';
import { ContentComponent } from './content.component';
import { MenuListComponent } from './menu-list.component';
import { UserService } from './user.service';
import { UserDetailComponent } from './user-detail.component';
import { UserListComponent } from './user-list.component';
import { UserEditComponent } from './user-edit.component';
import { UserAddComponent } from './user-add.component';

@NgModule({
  declarations: [
    AppComponent
    ,ContentComponent
    ,HomeComponent
    ,AboutComponent
    ,MenuComponent
    ,MenuListComponent
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
  	UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
