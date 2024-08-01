import { Component } from '@angular/core';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { DatePipe, TitleCasePipe } from '@angular/common';
import { FormatPipes } from '../../ui/pipes/FormatUtils';

@Component({
  selector: 'app-inputs',
  standalone: true,
  imports: [DatePickerComponent, FormatPipes],
  templateUrl: './inputs.component.html',
  styleUrl: './inputs.component.css',
})
export class InputsComponent {
  imageUrl: string = '';
  parentDate = '2018-07-22';
  anotherDate = '2022-07-22';

  currentDate = new Date();

  onChange(format: string, date: string) {
    this.parentDate = date;
  }
}
