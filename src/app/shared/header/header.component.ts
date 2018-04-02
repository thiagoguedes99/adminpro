import { Component, OnInit } from '@angular/core';

import { UsuarioService } from '../../service/index';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  usuario: Usuario;

  constructor(public _usuarioService: UsuarioService) { }

  ngOnInit() {
    this.usuario  = this._usuarioService.usuario;
    console.info('login foito com usuario')
    console.info(this.usuario)
  }

}
