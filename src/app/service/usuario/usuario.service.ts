import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';

import { Usuario } from '../../models/usuario.model';
import { Router } from '@angular/router';
import { SubirService } from '../index';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UsuarioService {

  usuario: Usuario;
  token: string;

  constructor( public http: HttpClient,
              public rota: Router,
              public _subirArtigo: SubirService) {
    this.carregaToken();
  }

  renovarToken() {
    const url = 'http://localhost:3000/login/novotoken';

    return this.http.get(url)
                    .map((resp: any) => {
                      this.token = resp.token;
                      localStorage.setItem('token', this.token);

                      return true;
                    })
                    .catch((err: any) => {
                      this.rota.navigate(['/login']);
                      return Observable.throw(err);
                    });
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
                      console.log('resposta do login')
                      console.log(resp)
                      // localStorage.setItem('id', resp.usuario._id);
                      // localStorage.setItem('token', resp.token);
                      // localStorage.setItem('usuario', JSON.stringify(resp.usuario) );

                      this.gravarSecao(resp.usuario._id, resp.token, resp.usuario);

                      return true;
                    })
                    .catch((err: any) => {
                      console.log(err.error.mensage);
                      alert(err.error.mensage);

                      return Observable.throw(err);
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
    // usuario.id = id;
    localStorage.setItem('usuario', JSON.stringify(usuario) );

    this.usuario = usuario;
    // this.usuario.id = id;
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

  mudarImagem(file: File, id: string) {
    console.log('aqui está o id do cara')
    console.log(id)
    this._subirArtigo.subirArquivo(file,'usuario', id)
        .then((resp: any) => {
          console.log('foi porra');
          console.log(resp);
          this.usuario.img = resp.usuario.img;
          this.gravarSecao(id, this.token, this.usuario);
        })
        .catch(resp => {
          console.log('deu erro porra');
          console.log(resp);
        });
  }

  carregarUsuarios(desde: number = 0) {
    const url = `http://localhost:3000/usuario?qtd=${desde}`;

    return this.http.get(url);

  }

  buscarUsuarios(nome: string) {
    const url = `http://localhost:3000/busca/collection/usuario/${nome}`;

    return this.http.get(url)
                    .map((resp: any) => resp.usuario);

  }

  deletarUsuario(id: string) {
    const url = `http://localhost:3000/usuario/${id}`;

    return this.http.delete(url);
  }

}
