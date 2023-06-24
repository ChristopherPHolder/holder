import { Component } from '@angular/core';

@Component({
	selector: 'app-homeone-testimonials',
	templateUrl: './homeone-testimonials.component.html',
	styleUrls: ['./homeone-testimonials.component.scss'],
})
export class HomeoneTestimonialsComponent {
	sectionTitle = [
		{
			subTitle: 'Testimonials',
			title: 'What Our Clients Are Saying?',
			paragraphText:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
		},
	];
	singleTestimonialsItem = [
		{
			paragraphText:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ali. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.',
			clientImg: 'assets/img/testimonials/img1.jpg',
			clientName: 'Alex Maxwell',
			clientDesignation: 'CEO at EnvyTheme',
		},
		{
			paragraphText:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ali. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.',
			clientImg: 'assets/img/testimonials/img2.jpg',
			clientName: 'David Warner',
			clientDesignation: 'CEO at Envato',
		},
		{
			paragraphText:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ali. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.',
			clientImg: 'assets/img/testimonials/img3.jpg',
			clientName: 'Sarah Taylor',
			clientDesignation: 'CEO at ThemeForest',
		},
	];
	testimonialsBtn = [
		{
			link: '/',
			icon: 'flaticon-view',
			text: 'Check Out All Reviews',
		},
	];
}
