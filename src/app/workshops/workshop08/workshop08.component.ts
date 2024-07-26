import { NgClass, NgIf, NgStyle } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AlertComponent } from '../../ui/alert/alert.component';
import { User } from '../../core/models/user.model';
import { InputsComponent } from '../../experiments/inputs/inputs.component';
import {
  UserEdit,
  UserFormComponent,
} from '../../core/components/user-form/user-form.component';
import { UsersComponent } from '../../core/components/users/users.component';
import { UserService } from '../../services/user-http.service';
import { LogService } from '../../services/log.service';

@Component({
  selector: 'app-workshop08',
  standalone: true,
  imports: [
    NgIf,
    NgStyle,
    NgClass,
    AlertComponent,
    InputsComponent,
    UserFormComponent,
    UsersComponent,
  ],
  templateUrl: './workshop08.component.html',
  styleUrl: './workshop08.component.css',
})
export class Workshop08Component {
  isError = true;
  message = '';
  userService = inject(UserService);
  users: User[] = [];

  constructor() {
    this.userService.getUsers().subscribe((users) => {
      this.users = users;
    });
  }

  addUser(user: UserEdit) {
    // this.loading = true;
    try {
      this.userService.addUser(user).subscribe(() => {
        this.userService.getUsers().subscribe((users) => {
          this.users = users;
        });
      });
    } catch (error: any) {
      this.isError = true;
      this.message = error.message;
    }
  }
}
