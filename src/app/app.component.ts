import { Component } from '@angular/core';
import { UsersComponent } from './core/users/users.component';
import { NgClass, NgIf, NgStyle } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UsersComponent, NgIf, NgStyle, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'sofrecom-july';
  users = [
    { id: 1, firstName: 'user1', age: 20 },
    { id: 2, firstName: 'user2', age: 30 },
    { id: 3, firstName: 'user3', age: 40 },
  ];
  counter = 0;
  isLoading = false;
  buttonStyle = { color: 'red' };
  inputClass = 'error';

  constructor() {
    setTimeout(() => {
      this.title = 'after 2s';
    }, 2000);
  }

  onClick() {
    this.counter = this.counter + 1;
    this.buttonStyle = { color: 'blue' };
    this.inputClass = 'success';
  }

  getCounter() {
    console.log('getCounter called');
    return this.counter;
  }
}
