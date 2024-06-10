import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customCapitalize'
})
export class CustomCapitalizePipe implements PipeTransform {

  transform(value: string): string {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }

}
