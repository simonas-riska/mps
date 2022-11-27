import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'dateFilter' })
export class FilterDatePipe implements PipeTransform {
  transform(items: any[], searchDate: Date | undefined): any[] {
    if (!items) {
      return [];
    }
    if (!searchDate) {
      return items;
    }

    const searchDateString = searchDate.toString();

    return items.filter(it => {
      return it.date.toString().toLocaleLowerCase().includes(searchDateString);
    });
  }
}