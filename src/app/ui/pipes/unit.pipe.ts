import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unit',
  standalone: true,
})
export class UnitPipe implements PipeTransform {
  transform(value: number, currency: string): unknown {
    return `${currency}${value}`;
  }
}
