import { Pipe, PipeTransform } from '@angular/core';
import { Ingredient } from '../types/types';

@Pipe({
  name: 'orderPrice',
  pure: false
})
export class OrderPricePipe implements PipeTransform {

  transform(value: (Ingredient| undefined)[], ...args: unknown[]): number {
    let total = 0;

    value.map(ing => {
      if(ing?.type === 'bun' && !!ing){
        total += ing.price * 2;
      }
      if(!!ing && ing.type !== 'bun') {
        total += ing.price;
      }
    })

    return total;
  }
}
