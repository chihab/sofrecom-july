import { Component } from '@angular/core';
import { FromNowPipe } from '../../core/pipes/from-now.pipe';

@Component({
  selector: 'app-workshop09',
  standalone: true,
  imports: [FromNowPipe],
  templateUrl: './workshop09.component.html',
  styleUrl: './workshop09.component.css',
})
export class Workshop09Component {
  date = new Date('2020-01-01');
}
