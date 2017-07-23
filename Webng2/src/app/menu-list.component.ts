import { Component, Input } from '@angular/core';

import { MenuComponent } from './menu.component';

@Component({
  selector: 'menu-list'
  ,template: `
	  	<nav>
	  		<ul>
	  			<li *ngFor='let menu of menus' title='{{menu.tooltip}}'>
	  				<a [hidden]="!menu.visible" routerLink='{{menu.href}}'>{{menu.display}}</a>
	  			</li>
	  		</ul>
	  	</nav>
  	`
  ,styleUrls: [
  	'./menu-list.component.css'
  ]
  // ,templateUrl: './app.component.html'
  // ,styleUrls: ['./app.component.css']
})
export class MenuListComponent {
	about;
	menus : MenuComponent[];

	@Input() aMenu: MenuComponent;
	constructor() {
		this.about = "About MenuComponent";
		this.menus = [
			new MenuComponent('First Teachers Ministry','/', 'System name', true)
			,new MenuComponent('Home','/', 'Home', true)
			,new MenuComponent('User','/user/list', 'User', true)
			,new MenuComponent('Parent','/parent/list', 'Parent', true)
			,new MenuComponent('Child', '/child/list', 'Child', true)
			,new MenuComponent('Mailing', '/mailing/list', 'Mailing', true)
			,new MenuComponent('About','/about', 'About', true)
		];
	}
}
