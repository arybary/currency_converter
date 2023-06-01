import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyIcon',
})
export class CurrencyForIconPipe implements PipeTransform {
  transform(value: string): string {
    return value.slice(0, 2).toLowerCase();
  }
}
