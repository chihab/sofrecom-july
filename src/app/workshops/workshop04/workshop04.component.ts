import { NgClass, NgIf, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { AlertComponent } from '../../ui/alert/alert.component';
import { User } from '../../core/models/user.model';
import { InputsComponent } from '../../experiments/inputs/inputs.component';

@Component({
  selector: 'app-workshop04',
  standalone: true,
  imports: [NgIf, NgStyle, NgClass, AlertComponent, InputsComponent],
  templateUrl: './workshop04.component.html',
  styleUrl: './workshop04.component.css',
})
export class Workshop04Component {
  users: User[] = [];
  isError = false;
  addUser(firstName: string, lastName: string, email: string) {
    if (!firstName || !lastName || !email) {
      this.isError = true;
      return;
    }
    if (this.users.length === 5) {
      this.isError = true;
      return;
    }
    this.users.push({ firstName, lastName, email });
  }
}
