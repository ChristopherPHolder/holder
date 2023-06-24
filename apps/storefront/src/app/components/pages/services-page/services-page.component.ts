import { Component } from '@angular/core';

@Component({
	selector: 'app-services-page',
	templateUrl: './services-page.component.html',
	styleUrls: ['./services-page.component.scss'],
})
export class ServicesPageComponent {
	pageTitleArea = [
		{
			title: 'Services',
		},
	];
	singleSolutionsBox = [
		{
			icon: 'flaticon-rocket',
			title: 'Startup Applications',
			paragraphText:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna adipiscing aliqua.',
			link: 'services-details',
			linkText: 'View Details',
		},
		{
			icon: 'flaticon-laptop',
			title: 'SaaS Solutions',
			paragraphText:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna adipiscing aliqua.',
			link: 'services-details',
			linkText: 'View Details',
		},
		{
			icon: 'flaticon-money',
			title: 'E-Commerce Platforms',
			paragraphText:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna adipiscing aliqua.',
			link: 'services-details',
			linkText: 'View Details',
		},
		{
			icon: 'flaticon-segmentation',
			title: 'Research',
			paragraphText:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna adipiscing aliqua.',
			link: 'services-details',
			linkText: 'View Details',
		},
		{
			icon: 'flaticon-analytics',
			title: 'Analytics',
			paragraphText:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna adipiscing aliqua.',
			link: 'services-details',
			linkText: 'View Details',
		},
		{
			icon: 'flaticon-settings',
			title: 'Technology',
			paragraphText:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna adipiscing aliqua.',
			link: 'services-details',
			linkText: 'View Details',
		},
	];
}
