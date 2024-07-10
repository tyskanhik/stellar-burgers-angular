import { Pipe, PipeTransform } from '@angular/core';
import { BurgerConstructorState } from '../types/types';

@Pipe({
  name: 'totalPrice',
  pure: false
})
export class TotalPricePipe implements PipeTransform {

  transform(value: BurgerConstructorState | undefined, ...args: unknown[]): number {
    let total = 0;
    if (!!value?.bun) {
      total += value.bun.price * 2;
    }

    value?.ingredients.forEach(item => {
      total += item.price;
    });

    return total;
  }
}
