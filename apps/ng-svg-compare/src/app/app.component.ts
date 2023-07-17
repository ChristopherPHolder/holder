import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgForOf } from '@angular/common';

@Component({
	standalone: true,
  imports: [RouterModule, NgForOf],
	selector: 'holder-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	title = 'ng-svg-compare';

  navItems = [
    { title: 'ngx-fast-svg' },
    { title: 'ngx-fast-svg' },
    { title: 'ngx-fast-svg' },
    { title: 'ngx-fast-svg' },
    { title: 'ngx-fast-svg' }
  ]
}
