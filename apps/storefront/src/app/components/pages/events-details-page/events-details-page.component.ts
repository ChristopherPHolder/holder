import { Component } from '@angular/core';

@Component({
	selector: 'app-events-details-page',
	templateUrl: './events-details-page.component.html',
	styleUrls: ['./events-details-page.component.scss'],
})
export class EventsDetailsPageComponent {
	pageTitleArea = [
		{
			title: 'Events Details',
			subTitle: 'Global Conference on Business Management and Economics',
		},
	];
}
