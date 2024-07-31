import { Component, inject, Input } from '@angular/core';
import { UserService } from '../../services/user-http.service';

@Component({
  selector: 'app-workshop10',
  standalone: true,
  imports: [],
  templateUrl: './workshop10.component.html',
  styleUrl: './workshop10.component.css',
})
export class Workshop10Component {
  @Input() usersCount = 0;
  userService = inject(UserService);
  // constructor() {
  //   this.userService.getUsersCount().subscribe((userCount) => {
  //     this.userCount = userCount;
  //   });
  // }
}
