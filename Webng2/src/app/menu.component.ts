import { Component } from '@angular/core';

@Component({
	selector: ''
	,template: ``
	,styles: []
})

export class MenuComponent {

	display: string;
	href: string;
	tooltip: string;
	visible: boolean;

	constructor(display: string, href: string, tooltip: string, visible: boolean) {
		this.display = display;
		this.href = href;
		this.tooltip = tooltip;
		this.visible = visible;
	}
}