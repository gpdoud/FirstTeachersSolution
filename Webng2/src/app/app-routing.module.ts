import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { AboutComponent } from './about.component';
import { UserDetailComponent } from './user-detail.component';
import { UserListComponent } from './user-list.component';
import { UserFormComponent } from './user-form.component';
import { UserEditComponent } from './user-edit.component';
// import { ParameterComponent } from './parameter.component';

const routes: Routes = [
	{ path: '', redirectTo: '/home', pathMatch: 'full' }
	,{ path: 'home', component: HomeComponent }
	,{ path: 'userform', component: UserFormComponent }
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