import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class ModalUploadService {

  oculto: string = 'oculto';
  tipo: string;
  id: string;

  // oculto: string;

  notificacao = new EventEmitter<any>();

  constructor() { }

  fecharModal() {
    this.oculto = 'oculto';
    this.tipo = null;
    this.id = null;
  }

  abrirModal(tipo: string, id: string) {
    this.oculto = '';
    this.tipo = tipo;
    this.id = id;
  }

}
