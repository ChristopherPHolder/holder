import { Component, inject } from '@angular/core';
import {
	NavigationCancel,
	NavigationEnd,
	NavigationStart,
	Router,
} from '@angular/router';
import { filter, map, tap } from 'rxjs/operators';
import * as $ from 'jquery';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	public navigating$ = inject(Router).events.pipe(
		filter(
			(event) =>
				event instanceof (NavigationStart || NavigationCancel || NavigationEnd)
		),
		map((event) => !(event instanceof NavigationStart)),
		tap((navEnded) => navEnded || window.scrollTo(0, 0)),
		tap((navEnded) => navEnded || $.getScript('../assets/js/main.js'))
	);
}
