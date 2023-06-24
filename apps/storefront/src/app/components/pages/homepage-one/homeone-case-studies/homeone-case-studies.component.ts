import { Component } from '@angular/core';

@Component({
	selector: 'app-homeone-case-studies',
	templateUrl: './homeone-case-studies.component.html',
	styleUrls: ['./homeone-case-studies.component.scss'],
})
export class HomeoneCaseStudiesComponent {
	singleCaseStudyItem = [
		{
			subTitle: 'Case study #1',
			title: 'Data Science in Pharmaceutical Industries',
			paragraphText1:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
			paragraphText2:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.',
			link: 'case-studies-details',
			linkText: 'Details More',
			linkIcon: 'flaticon-view',
			img: 'assets/img/case-study/img1.jpg',
		},
		{
			subTitle: 'Case study #2',
			title: 'Mathematics, Advanced Statistics in Python',
			paragraphText1:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
			paragraphText2:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.',
			link: 'case-studies-details',
			linkText: 'Details More',
			linkIcon: 'flaticon-view',
			img: 'assets/img/case-study/img2.jpg',
		},
	];
}
