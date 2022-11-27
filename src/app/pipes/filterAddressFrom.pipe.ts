import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'addressFromFilter' })
export class FilterAddressFromPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();

    return items.filter(it => {
      return it.fromAdress.toString().toLocaleLowerCase().includes(searchText);
    });
  }
}