import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { SettingService } from '../../service';

@Component({
  selector: 'app-accout-settings',
  templateUrl: './accout-settings.component.html',
  styleUrls: ['./accout-settings.component.css']
})
export class AccoutSettingsComponent implements OnInit {

  // NOTA:
  // tanto assim: @Inject(DOCUMENT) private _document / _document.getElementById
  // quanto assim: document.getElementsByClassName
  // faz a mesma coisa.
  constructor(@Inject(DOCUMENT) private _document, private _ajustes: SettingService) { }

  ngOnInit() {
    this.aplicaCheckDefaut()
  }

  mudarTema(tema: string, elemento: any) {
    this.aplicaCheck(elemento);

    // let url = `assets/css/colors/${tema}.css`;
    // this._document.getElementById('tema').setAttribute('href', url);

    // this._ajustes.ajuste.tema = tema;
    // this._ajustes.ajuste.temaUrl = url;
    // this._ajustes.gravarAjustes();

    this._ajustes.aplicarTema(tema);
  }

  aplicaCheck(elemento: any) {
    let selectores: any = document.getElementsByClassName('selector');

    for(let ref of selectores) {
      ref.classList.remove('working');
    }

    elemento.classList.add('working');
  }

  aplicaCheckDefaut() {
    let selectores: any = document.getElementsByClassName('selector');
    let temaAtual = this._ajustes.ajuste.tema;
    for(let ref of selectores) {
      // poderia buscar o atributo name ref.getAttribute('name')
      if (ref.getAttribute('data-theme') === temaAtual) {
        ref.classList.add('working');
        break;
      }
    }
  }

}
