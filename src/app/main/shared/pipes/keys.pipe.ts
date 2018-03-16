import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keys'
})
export class KeysPipe implements PipeTransform {

  transform(value: any, args: {}): any {
    const keys = [];
    // tslint:disable-next-line:forin
    // tslint:disable-next-line:prefer-const
    // tslint:disable-next-line:forin
    for (const key in value) {
      keys.push({key: key, value: value[key]});
    }
    return keys;
  }

}
