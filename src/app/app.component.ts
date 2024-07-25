import { Component, inject } from '@angular/core';
import { InputsComponent } from './experiments/inputs/inputs.component';
import { Workshop04Component } from './workshops/workshop04/workshop04.component';
import { Workshop05Component } from './workshops/workshop05/workshop05.component';
import { UserService } from './services/user.service';
import { DiComponent } from './experiments/di/di.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    InputsComponent,
    Workshop04Component,
    Workshop05Component,
    DiComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  private userService = inject(UserService);

  getUsers() {
    return this.userService.getUsers();
  }
}

// Unit Test
// const app = new AppComponent();
// expect(app.getUsers()).toEqual(2);
