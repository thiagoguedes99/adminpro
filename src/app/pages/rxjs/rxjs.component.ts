import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  constructor() {
    this.subscription = this.devolveObservable()
    .retry(2)
    .subscribe(
      numero => console.log('next', numero),
      error => console.log('error', error),
      () => console.log('complete')
    );

  }

  ngOnInit() {
  }

  ngOnDestroy() {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscription.unsubscribe();

  }

  devolveObservable(): Observable<any> { // colocando 'Observable<number>' da erro...
    return new Observable(observe => {

      let contador = -1;

      let intervalo = setInterval(() => {
        contador++;

        let saida = {
          valor: contador
        }

        console.log('next')
        observe.next(saida);

        // if (contador === 3) {
        //   clearInterval(intervalo);
        //   observe.complete();
        // }

        // if (contador === 2) {
        //   // clearInterval(intervalo);
        //   observe.error();
        // }
      }, 500);
    })
    .retry(2)
    // .map(resp => resp.valor);
    .map((resp: any) => {
      console.log('map')
      console.log(resp.valor)
      return resp.valor + 1;
    })
     // filter(resp, index)
    .filter(resp => (resp % 2) ? true : false);
  }

}
