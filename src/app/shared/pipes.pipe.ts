import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'taxCalculator'
})
export class PipesPipe implements PipeTransform {
  transform(value: any, gst?: any): any {
    return (gst / 100) * value;
  }
}
