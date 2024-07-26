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
    // this.getUsers();
    // setInterval(() => {
    // GET, POST, PUT, DELETE
    // this.loading = true;
    // const callback = (data) => {
    //   this.data = data;
    //   console.log(data);
    // };

    // callback({ title: 'Hello' });
    this.http.get('https://jsonplaceholder.typicode.com/todoss/1').subscribe({
      next: (data) => {
        this.data = data;
        console.log(data);
      },
      error: (err) => {
        console.error(err);
      },
    });

    // const promise = fetch('https://jsonplaceholder.typicode.com/todos/2');
    // promise
    //   .then((response) => response.json())
    //   .then((json) => {
    //     console.log(json);
    //   });
    // console.log('getUsers');
  }
}
