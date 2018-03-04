import { Component, OnInit, Input, Output, ViewChild, EventEmitter, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtProgress') txtProgress: ElementRef;
  @Input('nome') legenda: string = 'legenda';
  @Input() percentagem: number = 0;

  @Output('atualizaValor') mudouValor: EventEmitter<number> = new EventEmitter();

    constructor() { }

    ngOnInit() {
    }


    onChanges(valor: number) {
      this.percentagem = Math.max(0, Math.min(100, valor));
      this.txtProgress.nativeElement.value = this.percentagem;
      this.mudouValor.emit(this.percentagem);
    }

    mudarValor(valor: number) {
      this.percentagem = Math.max(0, Math.min(100, (this.percentagem + valor)));
      this.mudouValor.emit(this.percentagem);
    }
}
