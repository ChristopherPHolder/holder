import { Component } from '@angular/core';

@Component({
	selector: 'app-homefour-banner',
	templateUrl: './homefour-banner.component.html',
	styleUrls: ['./homefour-banner.component.scss'],
})
export class HomefourBannerComponent {
	bannerWrapperContent = [
		{
			title: 'Managed Analytics and Data Analysis Platform',
			paragraphText:
				'We have created a cloud based tool to do your all boring tasks related to data analysis and decesion making based on the nature of data!',
			defaultBtnIcon: 'flaticon-right',
			defaultBtnText: 'About Us',
			defaultBtnLink: 'about-us',
			optionalBtnIcon: 'flaticon-tick',
			optionalBtnText: 'Get Started',
			optionalBtnLink: 'contact',
		},
	];
}
