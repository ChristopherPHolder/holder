import { Component } from '@angular/core';

@Component({
	selector: 'app-services-details-page',
	templateUrl: './services-details-page.component.html',
	styleUrls: ['./services-details-page.component.scss'],
})
export class ServicesDetailsPageComponent {
	pageTitleArea = [
		{
			title: 'Service Details',
			subTitle: 'AI & ML Development',
		},
	];
	servicesDetailsImage = [
		{
			img: 'assets/img/services/services-details1.jpg',
		},
	];
	servicesDetailsDesc = [
		{
			subTitle: 'AI & ML Development',
			title1: 'About this Services',
			paragraphText1:
				'Improve Machine Learning algorithms by studying underfitting, overfitting, training, validation, n-fold cross validation, testing, and how hyperparameters could improve performance. Perform linear and logistic regressions in Python.',
			paragraphText2:
				'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English. Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.',
			title2: 'Important Facts',
			title3: 'Application Areas',
			title4: 'Technologies That We Use',
			img1: 'assets/img/projects/img2.jpg',
			img2: 'assets/img/services/charts.jpg',
		},
	];
	servicesDetailsDescImportantFacts = [
		{
			title: 'The Field of Data Science',
		},
		{
			title: 'The Problem',
		},
		{
			title: 'The Solution',
		},
		{
			title: 'The Skills',
		},
		{
			title: 'Statistics',
		},
		{
			title: 'Mathematics',
		},
	];
	servicesDetailsDescApplication = [
		{
			title: 'Manufacturing',
			icon: 'flaticon-factory',
		},
		{
			title: 'Healthcare',
			icon: 'flaticon-hospital',
		},
		{
			title: 'Automobile',
			icon: 'flaticon-tracking',
		},
		{
			title: 'Banking',
			icon: 'flaticon-investment',
		},
		{
			title: 'Real Estate',
			icon: 'flaticon-house',
		},
		{
			title: 'Logistics',
			icon: 'flaticon-order',
		},
	];
	servicesDetailsDescTechnologiesFeatures = [
		{
			title: 'JavaScript',
		},
		{
			title: 'Python',
		},
		{
			title: 'Java',
		},
		{
			title: 'C/CPP',
		},
		{
			title: 'PHP',
		},
		{
			title: 'Swift',
		},
		{
			title: 'C# (C- Sharp)',
		},
		{
			title: 'Ruby',
		},
		{
			title: 'SQL',
		},
	];

	sidebarServicesList = [
		{
			title: 'AI & ML Development',
			link: 'services-details',
		},
		{
			title: 'Data Analytics',
			link: 'services-details',
		},
		{
			title: 'Data Science',
			link: 'services-details',
		},
		{
			title: 'Artificial Intelligence',
			link: 'services-details',
		},
		{
			title: 'Data Visualization',
			link: 'services-details',
		},
	];
	sidebarDownloadFile = [
		{
			title: 'PDF Download',
			icon: 'bx bxs-file-pdf',
			link: 'services-details',
		},
		{
			title: 'Services Details.txt',
			icon: 'bx bxs-file-txt',
			link: 'services-details',
		},
	];
	sidebarContactInfo = [
		{
			icon: 'bx bx-user-pin',
			title: 'Phone',
			subTitle: '+2145 354 5413',
		},
		{
			icon: 'bx bx-map',
			title: 'Location',
			subTitle: 'New York, USA',
		},
		{
			icon: 'bx bx-envelope',
			title: 'Email',
			subTitle: 'hello@wilo.com',
		},
	];
}
