import {
  Directive,
  ElementRef,
  EventEmitter,
  inject,
  Input,
  Output,
} from '@angular/core';

@Directive({
  selector: '[appModel]',
  standalone: true,
})
export class ModelDirective {
  @Output() appModelChange = new EventEmitter<string>();

  formElement = inject(ElementRef);
  constructor() {
    this.formElement.nativeElement.addEventListener('input', (event: any) => {
      this.appModelChange.emit(event.target.value);
    });
  }

  @Input()
  set appModel(value: string) {
    this.formElement.nativeElement.value = value;
  }
}
