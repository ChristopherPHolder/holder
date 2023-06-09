import { Component } from '@angular/core';

@Component({
	selector: 'app-hometwo-services',
	templateUrl: './hometwo-services.component.html',
	styleUrls: ['./hometwo-services.component.scss'],
})
export class HometwoServicesComponent {
	sectionTitle = [
		{
			subTitle: 'Our Services',
			title: 'We Offer Professional Solutions For Business',
			paragraphText:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
		},
	];
	singleServicesItem = [
		{
			icon: 'assets/img/services/icon1.png',
			title: 'Customer Analytics',
			paragraphText:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna doloresssit amet aliqua.',
			btnIcon: 'flaticon-right',
			btnText: 'Read More',
			link: 'services-details',
		},
		{
			icon: 'assets/img/services/icon2.png',
			title: 'Risk Analytics',
			paragraphText:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna doloresssit amet aliqua.',
			btnIcon: 'flaticon-right',
			btnText: 'Read More',
			link: 'services-details',
		},
		{
			icon: 'assets/img/services/icon3.png',
			title: 'Social Media Analytics',
			paragraphText:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna doloresssit amet aliqua.',
			btnIcon: 'flaticon-right',
			btnText: 'Read More',
			link: 'services-details',
		},
		{
			icon: 'assets/img/services/icon4.png',
			title: 'Real Time Analytics',
			paragraphText:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna doloresssit amet aliqua.',
			btnIcon: 'flaticon-right',
			btnText: 'Read More',
			link: 'services-details',
		},
		{
			icon: 'assets/img/services/icon5.png',
			title: 'Big Data Analytics',
			paragraphText:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna doloresssit amet aliqua.',
			btnIcon: 'flaticon-right',
			btnText: 'Read More',
			link: 'services-details',
		},
		{
			icon: 'assets/img/services/icon6.png',
			title: 'Business Analytics',
			paragraphText:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna doloresssit amet aliqua.',
			btnIcon: 'flaticon-right',
			btnText: 'Read More',
			link: 'services-details',
		},
	];
}
