import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ChildDetailComponent } from './child-detail/child-detail.component';
import { ChildAddComponent } from './child-add/child-add.component';
import { ChildEditComponent } from './child-edit/child-edit.component';
import { ChildrenListComponent } from './children-list/children-list.component';
import { MailingAddComponent } from './mailing-add/mailing-add.component';
import { MailingEditComponent } from './mailing-edit/mailing-edit.component';
import { MailingDetailComponent } from './mailing-detail/mailing-detail.component';
import { MailingListComponent } from './mailing-list/mailing-list.component';
import { ParentAddComponent } from './parent-add/parent-add.component';
import { ParentListComponent } from './parent-list/parent-list.component';
import { ParentDetailComponent } from './parent-detail/parent-detail.component';
import { ParentEditComponent } from './parent-edit/parent-edit.component';
import { ScheduleListComponent } from './schedule-list/schedule-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserAddComponent } from './user-add/user-add.component';
import { UserEditComponent } from './user-edit/user-edit.component';
// import { ParameterComponent } from './parameter.component';

const routes: Routes = [
	{ path: '', redirectTo: '/home', pathMatch: 'full' }
	,{ path: 'home', component: HomeComponent }
	,{ path: 'child/add', component: ChildAddComponent }
	,{ path: 'child/edit/:id', component: ChildEditComponent }
	,{ path: 'child/detail/:id', component: ChildDetailComponent }
	,{ path: 'child/list', component: ChildrenListComponent }
	,{ path: 'mailing/edit/:id', component: MailingEditComponent }
	,{ path: 'mailing/add', component: MailingAddComponent }
	,{ path: 'mailing/detail/:id', component: MailingDetailComponent }
	,{ path: 'mailing/list', component: MailingListComponent }
	,{ path: 'parent/add', component: ParentAddComponent }
	,{ path: 'parent/detail/:id', component: ParentDetailComponent }
	,{ path: 'parent/edit/:id', component: ParentEditComponent }
	,{ path: 'parent/list', component: ParentListComponent }
	,{ path: 'schedule/list', component: ScheduleListComponent }
	,{ path: 'user/add', component: UserAddComponent }
	,{ path: 'user/list', component: UserListComponent }
	,{ path: 'user/detail/:id', component: UserDetailComponent }
	,{ path: 'user/edit/:id', component: UserEditComponent }
	,{ path: 'about', component: AboutComponent }
	// ,{ path: 'parm/:id', component: ParameterComponent }
];

@NgModule({
	// imports: [ RouterModule.forRoot(routes, { enableTracing: true }) ]
	imports: [ RouterModule.forRoot(routes) ]
	,exports: [ RouterModule ]
})

export class AppRoutingModule {}