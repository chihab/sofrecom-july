import { Component } from '@angular/core';
import { FocusDirective } from '../../ui/directives/focus.directive';

@Component({
  selector: 'app-workshop13',
  standalone: true,
  imports: [FocusDirective],
  templateUrl: './workshop13.component.html',
  styleUrl: './workshop13.component.css',
})
export class Workshop13Component {
  isFocus = true;
}
