import { Component } from '@angular/core';

@Component({
	selector: 'app-blog-details-page',
	templateUrl: './blog-details-page.component.html',
	styleUrls: ['./blog-details-page.component.scss'],
})
export class BlogDetailsPageComponent {
	pageTitleArea = [
		{
			title: 'Blog Details',
			subTitle: 'The Challenges to Tackle Before You Start With AI',
		},
	];
}
