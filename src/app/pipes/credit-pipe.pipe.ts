import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditPipe',
  standalone: true
})
export class CreditPipePipe implements PipeTransform {
  transform(value:string): string {
    return `${value.substr(0, 4)} - ${value.substr(4, 4)} - ${value.substr(8, 4)} - ${value.substr(12, 4)}`;
  }
}
