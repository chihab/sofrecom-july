import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent {
  _id = '';

  @Input()
  set id(value: string) {
    this._id = value;
  }

  fetchUser() {
    console.log('fetching user with id', this._id);
  }
}

// users = new UsersComponent();
// users.id = '123';
// users.id = '20'

// read users.id
