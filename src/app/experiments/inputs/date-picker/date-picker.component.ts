import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-date-picker',
  standalone: true,
  imports: [],
  templateUrl: './date-picker.component.html',
  styleUrl: './date-picker.component.css',
})
export class DatePickerComponent {
  @Input()
  currentDate = '2000-07-22';

  @Input()
  format: string = 'fullDate';

  @Output()
  edit = new EventEmitter<string>();

  onDateChange(date: string) {
    this.edit.emit(date);
  }
}
