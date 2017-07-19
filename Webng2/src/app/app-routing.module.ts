import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { AboutComponent } from './about.component';
import { ParentAddComponent } from './parent-add.component';
import { ParentListComponent } from './parent-list.component';
import { ParentDetailComponent } from './parent-detail.component';
import { ParentEditComponent } from './parent-edit.component';
import { UserDetailComponent } from './user-detail.component';
import { UserListComponent } from './user-list.component';
import { UserAddComponent } from './user-add.component';
import { UserEditComponent } from './user-edit.component';
// import { ParameterComponent } from './parameter.component';

const routes: Routes = [
	{ path: '', redirectTo: '/home', pathMatch: 'full' }
	,{ path: 'home', component: HomeComponent }
	,{ path: 'parent/add', component: ParentAddComponent }
	,{ path: 'parent/detail/:id', component: ParentDetailComponent }
	,{ path: 'parent/edit/:id', component: ParentEditComponent }
	,{ path: 'parent/list', component: ParentListComponent }
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