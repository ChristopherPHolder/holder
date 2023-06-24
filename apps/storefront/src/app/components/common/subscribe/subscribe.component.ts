import { Component } from '@angular/core';

@Component({
	selector: 'app-subscribe',
	templateUrl: './subscribe.component.html',
	styleUrls: ['./subscribe.component.scss'],
})
export class SubscribeComponent {
	subscribeImage = [
		{
			img: 'assets/img/subscribe-img1.png',
		},
	];
	subscribeContent = [
		{
			title: 'We Like to Start Your Project With Us',
			paragraphText:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
			inputText: 'Enter your email address',
			buttonText: 'Subscribe Now',
			buttonIcon: 'flaticon-tick',
		},
	];
}
