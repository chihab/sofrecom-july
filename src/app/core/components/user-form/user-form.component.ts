import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

export interface UserEdit {
  firstName: string;
  lastName: string;
  email: string;
}

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css',
})
export class UserFormComponent {
  user: UserEdit = {
    firstName: '',
    lastName: '',
    email: '',
  };

  @Output()
  edit = new EventEmitter<UserEdit>();

  onSubmit() {
    this.edit.emit(this.user);
    this.user = {
      firstName: '',
      lastName: '',
      email: '',
    };
  }
}
