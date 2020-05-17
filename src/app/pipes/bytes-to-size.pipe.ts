import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bytesToSize'
})
export class BytesToSizePipe implements PipeTransform {

  transform(bytes: number, ...args: any[]): string {
    if (bytes === 0) { return '0 Bytes'; }

    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

}
