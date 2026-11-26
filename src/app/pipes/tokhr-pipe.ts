import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tokhr',
})
export class TokhrPipe implements PipeTransform {
    transform(amount: number): string {

    let total:number = amount * 4100 ;

    total = Math.ceil(total / 100) * 100;
  
    return total.toLocaleString('en-US')
   
  }
}
