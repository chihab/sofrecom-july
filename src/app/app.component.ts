import { Component } from '@angular/core';
import { InputsComponent } from './experiments/inputs/inputs.component';
import { Workshop04Component } from './workshops/workshop04/workshop04.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [InputsComponent, Workshop04Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
