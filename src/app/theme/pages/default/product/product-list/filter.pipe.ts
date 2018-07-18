import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], ...args: string[]): any[] {
    let searchText = args[0];
    let cat = args[1];
    console.log(cat);
    if (!items) return [];
   
    searchText = searchText.toLowerCase();
    cat = cat.toLowerCase();

    if (searchText) {
      items = items.filter(item => item.productName.toLowerCase().includes(searchText));
    };
   
    if (cat) {
      items = items.filter(item => {
        let x = item.category.toLowerCase().includes(cat);
        return x;
      });
    };
    

    return items;
  }

}
