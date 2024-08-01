import { Component } from '@angular/core';
import { SampleDirective } from './sample/sample.directive';
import { AlertComponent } from '../../ui/components/alert/alert.component';

@Component({
  selector: 'app-custom-directives',
  standalone: true,
  imports: [SampleDirective, AlertComponent],
  templateUrl: './custom-directives.component.html',
  styleUrl: './custom-directives.component.css',
})
export class CustomDirectivesComponent {}
