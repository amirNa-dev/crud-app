import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myfilter',
  pure: false
})
export class MyFilterPipe implements PipeTransform {

  transform(items: any[],value : string): any[] {

    if (!items) return [];
    if (!value || value.length == 0) return items;
    return items.filter(it => {
      return (it["lastname"].toLowerCase().indexOf(value.toLowerCase()) !=-1
        || it["firstname"].toLowerCase().indexOf(value.toLowerCase()) !=-1
        || it["role"].toLowerCase().indexOf(value.toLowerCase()) !=-1
        || it["email"].toLowerCase().indexOf(value.toLowerCase()) !=-1)
    });
  }
}