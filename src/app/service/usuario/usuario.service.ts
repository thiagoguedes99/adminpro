import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';

import { Usuario } from '../../models/usuario.model';
import { Router } from '@angular/router';

@Injectable()
export class UsuarioService {

  usuario: Usuario;
  token: string;

  constructor( public http: HttpClient,
                private rota: Router ) {
    this.carregaToken();
  }

  criarUsuario( usuario: Usuario ) {
    const url = 'http://localhost:3000/usuario';

    console.log(url);
    console.log(usuario);
    return this.http.post(url, usuario)
                    .map((resp: any) => {
                      // swal('usuário criado', usuario.email, 'success');
                      alert('usuário criado');
                      return resp.usuario;
                    });
  }

  login(usuario: Usuario, recordar: boolean = false) {
    const url = 'http://localhost:3000/login';

    if (recordar) {
      localStorage.setItem('email', usuario.email);
    } else {
      localStorage.removeItem('email');
    }

    return this.http.post(url, usuario)
                    .map((resp: any) => {
                      // localStorage.setItem('id', resp.usuario._id);
                      // localStorage.setItem('token', resp.token);
                      // localStorage.setItem('usuario', JSON.stringify(resp.usuario) );

                      this.gravarSecao(resp.usuario._id, resp.token, resp.usuario);

                      return true;
                    });
  }

  loginGoogle(token: string) {
    const url = 'http://localhost:3000/login/google';

    return this.http.post(url, {token} )
                    .map((resp: any) => {
                      this.gravarSecao(resp.usuario._id, resp.token, resp.usuario);
                      return true;
                    });
  }

  gravarSecao(id: string, token: string, usuario: Usuario) {
    localStorage.setItem('id', id);
    localStorage.setItem('token', token);
    localStorage.setItem('usuario', JSON.stringify(usuario) );

    this.usuario = usuario;
    this.token = token;
  }

  estaLogado() {
    return this.token.length > 5 ? true : false;
  }

  carregaToken() {
    if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
      this.usuario = JSON.parse(localStorage.getItem('usuario'));
    } else {
      this.token = '';
      this.usuario = null;
    }
  }

  logout() {
    this.usuario = null;
    this.token = '';
    localStorage.removeItem('id');
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');

    this.rota.navigate(['/login']);
  }

}
