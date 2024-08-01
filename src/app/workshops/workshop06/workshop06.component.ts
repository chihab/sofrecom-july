import { NgClass, NgIf, NgStyle } from '@angular/common';
import { Component, inject } from '@angular/core';
import { User } from '../../core/models/user.model';
import { InputsComponent } from '../../experiments/inputs/inputs.component';
import {
  UserEdit,
  UserFormComponent,
} from '../../core/components/user-form/user-form.component';
import { UsersComponent } from '../../core/components/users/users.component';
import { UserService } from '../../services/user.service';
import { LogService } from '../../services/log.service';
import { AlertComponent } from '../../ui/components/alert/alert.component';

@Component({
  selector: 'app-workshop06',
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
  providers: [
    UserService,
    {
      provide: LogService,
      useFactory: () => {},
    },
  ],
  templateUrl: './workshop06.component.html',
  styleUrl: './workshop06.component.css',
})
export class Workshop06Component {
  isError = true;
  message = '';
  userService = inject(UserService);
  users: User[] = this.userService.getAllUsers();

  constructor() {
    console.log('users', this.users);
  }

  addUser(user: UserEdit) {
    try {
      this.userService.addUser(user);
      this.users = this.userService.getAllUsers();
    } catch (error: any) {
      this.isError = true;
      this.message = error.message;
    }
  }
}
