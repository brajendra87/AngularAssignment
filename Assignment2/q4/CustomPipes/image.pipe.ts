import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  

  transform(value: string,imagePath: string): any {
debugger;

    return  imagePath+"/"+value+".png" ;
  }

}
