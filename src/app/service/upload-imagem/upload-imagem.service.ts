import { Injectable } from '@angular/core';

@Injectable()
export class UploadImagemService {

  constructor() { }

  subirArquivo(arquivo: File, tipo: string, id: string) {

    // return new Promise((resolve, reject) => {
    //   const formData = new FormData();

    //     const xhr = new XMLHttpRequest();

    //     formData.append('image', arquivo, arquivo.name);

    //     xhr.onreadystatechange = function() {
    //       if (xhr.readyState === 4) {
    //         if (xhr.status === 200) {
    //           console.log('subiu a imagem');
    //           resolve(xhr.response);
    //         }
    //         else {
    //           console.log('deu erro na subida');
    //           reject(xhr.response)
    //         }
    //       }
    //     }

    //   const url = `http://localhost:3000/image/${tipo}/${id}`;

    //   xhr.open('PUT', url, true);
    //   xhr.send( formData );
    // });

  }

}
