import { Component, inject, OnInit } from '@angular/core';
import {
	NavigationCancel,
	NavigationEnd,
	NavigationStart,
	Router,
} from '@angular/router';
import {
	Location,
	LocationStrategy,
	PathLocationStrategy,
} from '@angular/common';
import { filter, map, tap } from 'rxjs/operators';
import * as $ from 'jquery';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	providers: [
		Location,
		{
			provide: LocationStrategy,
			useClass: PathLocationStrategy,
		},
	],
})
export class AppComponent implements OnInit {
	public navigating$ = inject(Router).events.pipe(
		filter(
			(event) =>
				event instanceof (NavigationStart || NavigationCancel || NavigationEnd)
		),
		map((event) => !(event instanceof NavigationStart)),
		tap((navEnded) => navEnded || window.scrollTo(0, 0))
	);

	ngOnInit() {
		// @TODO Remove this
		// This is doing a lot of the animation or importing the ability to do them.
		// Jquery should be removed completly but the animations be converted to css and ts
		$.getScript('../assets/js/main.js');
	}
}
