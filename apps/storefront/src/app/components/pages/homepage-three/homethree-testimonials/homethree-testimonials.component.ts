import { Component } from '@angular/core';

@Component({
	selector: 'app-homethree-testimonials',
	templateUrl: './homethree-testimonials.component.html',
	styleUrls: ['./homethree-testimonials.component.scss'],
})
export class HomethreeTestimonialsComponent {
	sectionTitle = [
		{
			title: 'What Our Learners are Saying?',
			paragraphText:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
		},
	];
	singleTestimonialsBox = [
		{
			clientImg: 'assets/img/testimonials/img1.jpg',
			paragraphText:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ali. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.',
			clientName: 'Alex Maxwell',
			clientDesignation: 'CEO at EnvyTheme',
		},
		{
			clientImg: 'assets/img/testimonials/img2.jpg',
			paragraphText:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ali. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.',
			clientName: 'David Warner',
			clientDesignation: 'CEO at Envato',
		},
		{
			clientImg: 'assets/img/testimonials/img3.jpg',
			paragraphText:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ali. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.',
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
