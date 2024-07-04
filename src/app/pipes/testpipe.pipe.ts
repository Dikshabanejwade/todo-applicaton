import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'testpipe'
})
export class TestpipePipe implements PipeTransform {

  transform(value:Number[], ...args: unknown[]): Array<Number> {
    return value.sort();
  }

}
