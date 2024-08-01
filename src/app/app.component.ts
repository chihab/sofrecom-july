import { Component } from '@angular/core';
import { DiComponent } from './experiments/di/di.component';
import { InputsComponent } from './experiments/inputs/inputs.component';
import { Workshop04Component } from './workshops/workshop04/workshop04.component';
import { Workshop05Component } from './workshops/workshop05/workshop05.component';
import { Workshop06Component } from './workshops/workshop06/workshop06.component';
import { HttpComponent } from './experiments/http/http.component';
import { Workshop08Component } from './workshops/workshop08/workshop08.component';
import { Workshop09Component } from './workshops/workshop09/workshop09.component';
import { RouterComponent } from './experiments/router/router.component';
import { RouterOutlet } from '@angular/router';
import { CustomDirectivesComponent } from './experiments/custom-directives/custom-directives.component';
import { Workshop13Component } from './workshops/workshop13/workshop13.component';
import { NavbarComponent } from './ui/components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    // InputsComponent,
    // Workshop04Component,
    // Workshop05Component,
    // DiComponent,
    // Workshop06Component,
    // HttpComponent,
    // Workshop08Component,
    // Workshop09Component,
    // RouterComponent,
    NavbarComponent,
    RouterOutlet,
    CustomDirectivesComponent,
    Workshop13Component,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}

// Unit Test
// const app = new AppComponent();
// expect(app.getUsers()).toEqual(2);
