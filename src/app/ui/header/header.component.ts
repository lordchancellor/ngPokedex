import { Component, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'pd-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

	@Output()
	openMenu: EventEmitter<void> = new EventEmitter();

	constructor() { }

	// Component Functionality Methods
	onOpenMenu(): void {
		this.openMenu.emit();
	}

}
