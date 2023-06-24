import { Component, inject } from '@angular/core';
import {
	NavigationCancel,
	NavigationEnd,
	NavigationStart,
	Router,
} from '@angular/router';
import {
	debounceTime,
	filter,
	map,
	shareReplay,
	tap,
	throttleTime,
} from 'rxjs/operators';
import * as $ from 'jquery';
import { fromEvent } from 'rxjs';

type NavigationEvents = NavigationStart | NavigationCancel | NavigationEnd;
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	private router = inject(Router);
	private navigating$ = this.router.events.pipe(
		filter(
			(event) =>
				event instanceof NavigationStart ||
				event instanceof NavigationCancel ||
				event instanceof NavigationEnd
		),
		map((event) => event as NavigationEvents),
		tap((e) => console.log('e', e)),
		tap(
			(event) =>
				event instanceof NavigationEnd ||
				this.goToTop() ||
				$.getScript('../assets/js/main.js')
		),
		shareReplay()
	);

	public throbblerVisible$ = this.navigating$.pipe(
		map(
			(event) =>
				!(event instanceof NavigationEnd || event instanceof NavigationCancel)
		)
	);

	public footerBgClass$ = this.navigating$.pipe(
		filter(
			(event) =>
				event instanceof NavigationEnd || event instanceof NavigationCancel
		),
		map(() => this.router.url),
		filter(
			(url) =>
				![
					'/home-two',
					'/home-four',
					'/services-details',
					'/events-details',
					'/courses',
					'/courses-details',
				].includes(url)
		),
		map((url) => (url === '/about-us' ? 'bg-fffaf3' : 'bg-color'))
	);

	public goToTop(): void {
		window.scrollTo(0, 0);
	}

	private scrollY$ = fromEvent(window, 'scroll').pipe(
		throttleTime(200),
		debounceTime(200),
		map(() => window.scrollY),
		shareReplay()
	);

	public showGoTop$ = this.scrollY$.pipe(map((scrollY) => scrollY > 600));

	public headerSticky$ = this.scrollY$.pipe(map((scrollY) => scrollY > 120));
}
