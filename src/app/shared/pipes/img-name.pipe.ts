import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imgNamePipe'
})
export class ImgNamePipe implements PipeTransform {

  transform(value: string, ...args: any[]): string {
    return [
      'Clouds',
      'Snow',
      'Rain',
      'Sun'
    ].includes(value) ? value.toLowerCase() : 'sun';
  }
}
