import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MenuComponent } from './menu.component';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about.component';
import { ContentComponent } from './content.component';
import { MenuListComponent } from './menu-list.component';
import { UserService } from './user.service';
import { UserComponent } from './user.component';
import { UserListComponent } from './user-list.component';

@NgModule({
  declarations: [
    AppComponent
    ,ContentComponent
    ,HomeComponent
    ,AboutComponent
    ,MenuComponent
    ,MenuListComponent
    ,UserComponent
    ,UserListComponent
  ],
  imports: [
    BrowserModule
    ,AppRoutingModule
    ,HttpModule
  ],
  providers: [
  	UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
