import { Component, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'dex-sidenav',
	templateUrl: './sidenav.component.html',
	styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {

	@Output()
	closeMenu: EventEmitter<void> = new EventEmitter();

	constructor() { }

	// Component Functionality Methods
	onCloseMenu(): void {
		this.closeMenu.emit();
	}

}
