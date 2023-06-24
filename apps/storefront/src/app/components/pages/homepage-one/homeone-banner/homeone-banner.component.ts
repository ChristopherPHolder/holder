import { Component } from '@angular/core';

@Component({
	selector: 'app-homeone-banner',
	templateUrl: './homeone-banner.component.html',
	styleUrls: ['./homeone-banner.component.scss'],
})
export class HomeoneBannerComponent {
	mainBannerContent = [
		{
			title: 'Data Science Consulting Services',
			paragraphText:
				'Get professional & reliable research oriented solutions for Data Science and Machine Learning business needs. Enjoy stress free decesion making!',
			defaultBtnIcon: 'flaticon-structure',
			defaultBtnText: 'About Us',
			defaultBtnLink: 'about-us',
			videoBtnIcon: 'flaticon-google-play',
			videoBtnText: 'Watch Video',
			videoBtnLink: 'https://www.youtube.com/watch?v=Y5KCDWi7h9o',
		},
	];
}
