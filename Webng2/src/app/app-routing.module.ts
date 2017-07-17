import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { AboutComponent } from './about.component';
import { UserComponent } from './user.component';
import { UserListComponent } from './user-list.component';
// import { ParameterComponent } from './parameter.component';

const routes: Routes = [
	{ path: '', redirectTo: '/home', pathMatch: 'full' }
	,{ path: 'home', component: HomeComponent }
	,{ path: 'user', component: UserListComponent }
	,{ path: 'user/:id', component: UserComponent }
	,{ path: 'about', component: AboutComponent }
	// ,{ path: 'parm/:id', component: ParameterComponent }
];

@NgModule({
	// imports: [ RouterModule.forRoot(routes, { enableTracing: true }) ]
	imports: [ RouterModule.forRoot(routes) ]
	,exports: [ RouterModule ]
})

export class AppRoutingModule {}