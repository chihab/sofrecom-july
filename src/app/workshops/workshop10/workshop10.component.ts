import { Component, inject } from '@angular/core';
import { UserService } from '../../services/user-http.service';

@Component({
  selector: 'app-workshop10',
  standalone: true,
  imports: [],
  templateUrl: './workshop10.component.html',
  styleUrl: './workshop10.component.css',
})
export class Workshop10Component {
  userService = inject(UserService);
  userCount = 0;
  constructor() {
    this.userService.getUsersCount().subscribe((userCount) => {
      this.userCount = userCount;
    });
  }
}
