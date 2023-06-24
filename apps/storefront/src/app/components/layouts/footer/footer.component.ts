import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import {
	Location,
	LocationStrategy,
	PathLocationStrategy,
} from '@angular/common';

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.scss'],
	providers: [
		Location,
		{
			provide: LocationStrategy,
			useClass: PathLocationStrategy,
		},
	],
})
export class FooterComponent {
	location?: string;
	footerClass?: string;

	constructor(private router: Router) {
		this.router.events.subscribe((event) => {
			if (event instanceof NavigationEnd) {
				this.location = this.router.url;
				if (
					this.location == '/home-two' ||
					this.location == '/home-four' ||
					this.location == '/services-details' ||
					this.location == '/events-details' ||
					this.location == '/courses' ||
					this.location == '/courses-details'
				) {
					this.footerClass = 'footer-area';
				} else if (this.location == '/about-us') {
					this.footerClass = 'footer-area bg-fffaf3';
				} else {
					this.footerClass = 'footer-area bg-color';
				}
			}
		});
	}
}
