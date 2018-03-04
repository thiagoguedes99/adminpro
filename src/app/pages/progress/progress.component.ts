import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  percentagem1: number = 30;
  percentagem2: number = 50;

  constructor() { }

  ngOnInit() {
  }

  // atualizar(event: number) {
  //   this.percentagem1 = event;

  // }

  // mudarValor(valor: number) {
  //   this.percentagem = Math.max(0, Math.min(100, (this.percentagem + valor)));
  // }
}
