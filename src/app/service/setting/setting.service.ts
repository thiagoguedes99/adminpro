import { Injectable } from '@angular/core';

interface Ajustes {
  tema: string;
  temaUrl: string;
}

@Injectable()
export class SettingService {

  public ajuste: Ajustes = {
    tema: 'default',
    temaUrl: 'assets/css/colors/default.css'
  }

  constructor() {
    // this.carregarAjustes(); - faz automático quado importa este serviço
  }

  gravarAjustes() {
    localStorage.setItem('ajustes', JSON.stringify(this.ajuste));
  }

  carregarAjustes() {
    if (localStorage.getItem('ajustes')) {
      this.ajuste = JSON.parse(localStorage.getItem('ajustes'));
      this.aplicarTema(this.ajuste.tema);
    } else {
    }
  }

  aplicarTema(tema: string) {
    let url = `assets/css/colors/${tema}.css`;
    // this._document.getElementById('tema').setAttribute('href', url);
    document.getElementById('tema').setAttribute('href', url);

    this.ajuste.tema = tema;
    this.ajuste.temaUrl = url;
    this.gravarAjustes();
  }
}
