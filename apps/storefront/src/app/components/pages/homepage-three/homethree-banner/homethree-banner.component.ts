import { Component } from '@angular/core';

@Component({
	selector: 'app-homethree-banner',
	templateUrl: './homethree-banner.component.html',
	styleUrls: ['./homethree-banner.component.scss'],
})
export class HomethreeBannerComponent {
	heroBannerContent = [
		{
			title: 'Learn Machine Learning',
			paragraphText:
				'Keeping your skills up to date is essential and learning Data Science including oportunites on Big Data can drive you to become extraordinary professionals.',
			defaultBtnIcon: 'flaticon-right',
			defaultBtnText: 'Explore Bootcamps',
			defaultBtnLink: 'events',
		},
	];
}
