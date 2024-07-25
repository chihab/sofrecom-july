import { Component } from '@angular/core';
import { InputsComponent } from './experiments/inputs/inputs.component';
import { Workshop04Component } from './workshops/workshop04/workshop04.component';
import { Workshop05Component } from './workshops/workshop05/workshop05.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [InputsComponent, Workshop04Component, Workshop05Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
