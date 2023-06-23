import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ui-throbbler',
  standalone: true,
  templateUrl: './throbber.component.html',
  styleUrls: ['./throbber.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ThrobberComponent {
  @Input() visible = false;
}
