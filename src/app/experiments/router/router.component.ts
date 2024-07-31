import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-router',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './router.component.html',
  styleUrl: './router.component.css',
})
export class RouterComponent {}
