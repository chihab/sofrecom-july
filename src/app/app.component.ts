import { Component } from '@angular/core';
import { DiComponent } from './experiments/di/di.component';
import { InputsComponent } from './experiments/inputs/inputs.component';
import { Workshop04Component } from './workshops/workshop04/workshop04.component';
import { Workshop05Component } from './workshops/workshop05/workshop05.component';
import { Workshop06Component } from './workshops/workshop06/workshop06.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    InputsComponent,
    Workshop04Component,
    Workshop05Component,
    DiComponent,
    Workshop06Component,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  getUsers() {}
}

// Unit Test
// const app = new AppComponent();
// expect(app.getUsers()).toEqual(2);
