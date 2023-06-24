import { Component } from '@angular/core';

@Component({
	selector: 'app-related-services',
	templateUrl: './related-services.component.html',
	styleUrls: ['./related-services.component.scss'],
})
export class RelatedServicesComponent {
	sectionTitle = [
		{
			title: 'More Services You Might Like',
		},
	];
	singleSolutionsBox = [
		{
			icon: 'assets/img/services/icon1.png',
			title: 'Data Analytics',
			paragraphText:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna adipiscing aliqua.',
			link: 'services-details',
			linkText: 'View Details',
		},
		{
			icon: 'assets/img/services/icon2.png',
			title: 'AI & ML Development',
			paragraphText:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna adipiscing aliqua.',
			link: 'services-details',
			linkText: 'View Details',
		},
		{
			icon: 'assets/img/services/icon3.png',
			title: 'Data Science',
			paragraphText:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna adipiscing aliqua.',
			link: 'services-details',
			linkText: 'View Details',
		},
	];
}
