import { Component } from '@angular/core';

@Component({
	selector: 'app-homethree-courses',
	templateUrl: './homethree-courses.component.html',
	styleUrls: ['./homethree-courses.component.scss'],
})
export class HomethreeCoursesComponent {
	sectionTitle = [
		{
			title: 'Online Data Science Courses',
			paragraphText:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
		},
	];
	coursesInfo = [
		{
			paragraphText:
				'Get the most dedicated consultation for your life-changing course. Earn a certification for your effort and passion',
			linkText: 'Join Free Now.',
			link: 'contact',
		},
	];
	singleCoursesBox = [
		{
			courseImg: 'assets/img/courses/img1.jpg',
			coursePrice: 'Free',
			coursePriceClass: 'free',
			authorImg: 'assets/img/user1.jpg',
			authorName: 'Alex Morgan',
			title: 'Introduction to Quantitative Methods',
			link: 'courses-details',
			paragraphText:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
			courseDuration: '8 Weeks Long',
			studentApply: 'Available Now',
		},
		{
			courseImg: 'assets/img/courses/img2.jpg',
			coursePrice: '$49',
			coursePriceClass: 'paid',
			authorImg: 'assets/img/user2.jpg',
			authorName: 'Sarah Taylor',
			title: 'Introduction to Linear Models and Matrix Algebra',
			link: 'courses-details',
			paragraphText:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
			courseDuration: '7 Weeks Long',
			studentApply: 'Available Now',
		},
		{
			courseImg: 'assets/img/courses/img3.jpg',
			coursePrice: '$69',
			coursePriceClass: 'paid',
			authorImg: 'assets/img/user3.jpg',
			authorName: 'David Warner',
			title: 'Data Science: Inference and Modeling',
			link: 'courses-details',
			paragraphText:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
			courseDuration: '2 Weeks Long',
			studentApply: 'Not Available',
		},
	];
}
