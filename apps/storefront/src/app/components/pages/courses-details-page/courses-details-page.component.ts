import { Component } from '@angular/core';

@Component({
	selector: 'app-courses-details-page',
	templateUrl: './courses-details-page.component.html',
	styleUrls: ['./courses-details-page.component.scss'],
})
export class CoursesDetailsPageComponent {
	pageTitleArea = [
		{
			title: 'Courses Details',
			subTitle: 'Introduction to Quantitative Methods',
		},
	];
}
