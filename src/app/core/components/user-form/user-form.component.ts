import { Component, EventEmitter, Output } from '@angular/core';

export interface UserEdit {
  firstName: string;
  lastName: string;
  email: string;
}

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css',
})
export class UserFormComponent {
  @Output()
  edit = new EventEmitter<UserEdit>();

  onSubmit(firstName: string, lastName: string, email: string) {
    this.edit.emit({ firstName, lastName, email });
  }
}
