import { Component, OnInit } from '@angular/core';

import { UserFeedbackService } from './user-feedback.service';

@Component({
	selector: 'pd-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

	showSpinner: boolean = false;

	constructor(private userFeedbackService: UserFeedbackService) {}

	// Lifecycle Hooks
	ngOnInit(): void {
		this.userFeedbackService.spinner.subscribe(() => this.showSpinner = !this.showSpinner);
	}

}
