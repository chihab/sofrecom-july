import { Directive, ElementRef, inject, Input } from '@angular/core';

@Directive({
  selector: 'input[appFocus]',
  standalone: true,
})
export class FocusDirective {
  element: ElementRef<HTMLInputElement> = inject(ElementRef);

  @Input()
  set appFocus(value: boolean) {
    if (value) {
      this.element.nativeElement.focus();
    }
    //   } else {
    //     this.element.nativeElement.blur();
    //   }
  }
}
