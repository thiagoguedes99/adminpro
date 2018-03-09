import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styleUrls: ['./promesas.component.css']
})
export class PromesasComponent implements OnInit {

  constructor() {
    this.contar3().then(
      () => console.log('teminou')
    )
    .catch(
      erro => console.log(erro)
    );

  }

  ngOnInit() {
  }

  contar3(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      let contador = 0;

      let intervalo = setInterval(() => {
        contador++;
        console.log(contador);

        if (contador === 3) {
          // resolve('ok foi ');
          resolve(true);
          // reject('meu erro');
          reject(false);
          clearInterval(intervalo);
        }
      }, 1000);
    });
  }

}
