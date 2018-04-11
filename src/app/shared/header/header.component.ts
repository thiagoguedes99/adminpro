import { Component, OnInit } from '@angular/core';

import { UsuarioService } from '../../service/index';
import { Usuario } from '../../models/usuario.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  usuario: Usuario;

  constructor(public _usuarioService: UsuarioService,
              public _rota: Router) { }

  ngOnInit() {
    this.usuario  = this._usuarioService.usuario;
    console.info('login foito com usuario')
    console.info(this.usuario)
  }

  buscar(buscar: string) {
    this._rota.navigate(['/busca', buscar]);
  }

}
