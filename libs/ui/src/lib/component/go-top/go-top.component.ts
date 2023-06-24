import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'ui-go-top',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './go-top.component.html',
	styleUrls: ['./go-top.component.scss'],
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GoTopComponent {
	@Input() active = false;
}
