import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'priceFilter' })
export class FilterPricePipe implements PipeTransform {
  transform(items: any[], searchPrice: number | undefined): any[] {
    if (!items) {
      return [];
    }
    if (!searchPrice) {
      return items;
    }

    return items.filter(it => {
      return it.price.toString().includes(searchPrice);
    });
  }
}