import { Component } from '@angular/core';

@Component({
	selector: 'app-error-page',
	templateUrl: './error-page.component.html',
	styleUrls: ['./error-page.component.scss'],
})
export class ErrorPageComponent {
	errorContent = [
		{
			img: 'assets/img/error.png',
			title: 'Error 404 : Page Not Found',
			paragraphText:
				'The page you are looking for might have been removed had its name changed or is temporarily unavailable.',
			goBackBtnIcon: 'flaticon-history',
			goBackBtnText: 'Go Back',
			BackToHomeBtnIcon: 'flaticon-earth-day',
			BackToHomeBtnText: 'Homepage',
		},
	];
}
