import { Component } from '@angular/core';
import { DatePickerComponent } from './date-picker/date-picker.component';

@Component({
  selector: 'app-inputs',
  standalone: true,
  imports: [DatePickerComponent],
  templateUrl: './inputs.component.html',
  styleUrl: './inputs.component.css',
})
export class InputsComponent {
  imageUrl: string = '';
  parentDate = '2018-07-22';
  anotherDate = '2022-07-22';

  onChange(format: string, date: string) {
    this.parentDate = date;
  }
}
