import { NgClass, NgIf, NgStyle } from '@angular/common';
import { Component, inject } from '@angular/core';
import { User } from '../../core/models/user.model';
import { InputsComponent } from '../../experiments/inputs/inputs.component';
import {
  UserEdit,
  UserFormComponent,
} from '../../core/components/user-form/user-form.component';
import { Workshop05Service } from '../workshop05/services/workshop05.service';
import { AlertComponent } from '../../ui/components/alert/alert.component';

@Component({
  selector: 'app-workshop04',
  standalone: true,
  imports: [
    NgIf,
    NgStyle,
    NgClass,
    AlertComponent,
    InputsComponent,
    UserFormComponent,
  ],
  templateUrl: './workshop04.component.html',
  styleUrl: './workshop04.component.css',
})
export class Workshop04Component {
  // workshop05Service = inject(Workshop05Service);
  // workshop05Service is not available for injection here as it is provided in the providers array
  users: User[] = [];
  isError = true;
  message = '';
  addUser(user: UserEdit) {
    this.isError = false;
    if (!user.firstName || !user.lastName || !user.email) {
      this.isError = true;
      this.message = 'Please fill in all fields';
      return;
    }
    if (this.users.length === 5) {
      this.isError = true;
      this.message = 'You can only add 5 users';
      return;
    }
    this.users.push(user);
    this.message = 'User added successfully';
  }
}
