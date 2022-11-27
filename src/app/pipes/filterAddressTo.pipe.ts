import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'addressToFilter' })
export class FilterAddressToPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();

    return items.filter(it => {
      return it.toAdress.toString().toLocaleLowerCase().includes(searchText);
    });
  }
}