import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

function isValid(
  formControl: AbstractControl
): null | { isYoung?: string; isOlderThanNow?: string } {
  if (formControl.pristine) {
    return null;
  }
  console.log('Validating input', formControl.value);
  // return new Date(formControl.value) < new Date()
  //   ? null
  //   : { isOlderThanNow: 'Date must be older than now' };
  if (new Date(formControl.value) >= new Date()) {
    return { isOlderThanNow: 'Date must be older than now' };
  }
  // if is younger than 12 years
  if (
    new Date().getFullYear() - new Date(formControl.value).getFullYear() <
    12
  ) {
    return { isYoung: 'Date must be older than 12 years' };
  }
  return null;
}

@Component({
  selector: 'app-reactive-forms',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.css',
})
export class ReactiveFormsComponent {
  formGroup = new FormGroup({
    // firstName: new FormControl('sdf', [Validators.required]),
    // lastName: new FormControl('sdf', [Validators.required]),
    // email: new FormControl('c@c.com', [
    //   Validators.required,
    //   Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
    // ]),
    date: new FormControl('2020-01-01', [Validators.required, isValid]),
  });

  rendering() {
    console.log('Rendering');
  }
}
