import { Pipe, PipeTransform } from '@angular/core';
import { fromNow } from '../../helpers/date.helper';

@Pipe({
  name: 'fromNow',
  standalone: true,
})
export class FromNowPipe implements PipeTransform {
  transform(date: Date): unknown {
    return fromNow(date);
  }
}
