import { NgClass, NgIf, NgStyle } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import {
  UserEdit,
  UserFormComponent,
} from '../../core/components/user-form/user-form.component';
import { UsersComponent } from '../../core/components/users/users.component';
import { User } from '../../core/models/user.model';
import { InputsComponent } from '../../experiments/inputs/inputs.component';
import { UserService } from '../../services/user-http.service';
import { AlertComponent } from '../../ui/components/alert/alert.component';

@Component({
  selector: 'app-workshop14',
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
  templateUrl: './workshop14.component.html',
  styleUrl: './workshop14.component.css',
})
export class Workshop14Component {
  isError = true;
  message = '';
  userService = inject(UserService);
  router = inject(Router);
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
