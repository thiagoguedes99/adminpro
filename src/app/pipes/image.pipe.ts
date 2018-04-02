import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(image: string, tipo: string = 'usuario'): any {

    if (image.includes('https')) {
      return image;
    }

    const url = 'http://localhost:3000/imagem';

    if (!image) {
      return `${ url }/usuario/xxx`;
    }

    // switch (tipo) {
    //   case 'usuario':

    //   break;

    //   case 'medico':

    //   break;

    //   case 'hospital':

    //   break;

    //   default:
    //     break;
    // }

    return `${url}/${tipo}/${image}`
  }

}
