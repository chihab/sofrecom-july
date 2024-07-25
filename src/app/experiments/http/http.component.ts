import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-http',
  standalone: true,
  imports: [],
  templateUrl: './http.component.html',
  styleUrl: './http.component.css',
})
export class HttpComponent {
  http = inject(HttpClient);
  // data: any = { title: '' }; // undefined
  data: any = { title: '' }; // undefined
  constructor() {
    // fetch('https://jsonplaceholder.typicode.com/todos/1')
    //   .then((response) => response.json())
    //   .then((json) => (this.data = json));
    setInterval(() => {
      this.http
        .get('https://jsonplaceholder.typicode.com/todos/1')
        .subscribe((data) => {
          this.data = data;
        });
    }, 2000);
  }
}
