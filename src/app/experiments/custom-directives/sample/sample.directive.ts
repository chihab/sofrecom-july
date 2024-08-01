import {
  Directive,
  ElementRef,
  EventEmitter,
  inject,
  Input,
  Output,
} from '@angular/core';
import { AlertComponent } from '../../../ui/alert/alert.component';

@Directive({
  selector: '[appSample]',
  standalone: true,
})
export class SampleDirective {
  // @Input() sampleConfig = 'dark';
  @Output() sampleEvent = new EventEmitter<string>();
  element = inject(AlertComponent);

  constructor() {
    console.log('SampleDirec  tive');
    console.log(this.element);
    this.element.message = 'Hello from SampleDirective';
    // console.log(this.element.nativeElement);
    // const element = this.element.nativeElement;
    // element.style.color = 'red';
    // element.addEventListener('click', () => {
    //   element.style.color = 'blue';
    // });
  }

  @Input()
  set appSample(value: string) {}
}
