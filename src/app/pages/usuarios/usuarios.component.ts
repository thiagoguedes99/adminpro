import { Component, OnInit } from '@angular/core';

import { Usuario } from '../../models/usuario.model';
import { UsuarioService } from '../../service/index';
import { ModalUploadService } from '../../components/modal-upload/modal-upload.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styles: []
})
export class UsuariosComponent implements OnInit {

  usuarios: Usuario[] = [];
  desde: number = 0;
  totalRegistro: number = 0;
  isLoading: boolean = false;

  constructor(private _usuarioService: UsuarioService,
              public modalService: ModalUploadService) { }

  ngOnInit() {
    this.carregarUsuarios();

    // isso deve mudar,
    // o correto é fazer a request somente do registro modificado.
    // não pode recarregar tudo, deve atualizar somente o ID que foi mudado.
    this.modalService.notificacao.subscribe(resp => {
      this.carregarUsuarios();
    });
  }

  carregarUsuarios() {
    this.isLoading = true;

    this._usuarioService.carregarUsuarios(this.desde)
                        .subscribe((resp: any) => {
                          this.totalRegistro = resp.total;
                          this.usuarios = resp.usuarios;
                          console.log(resp);
                        });
    this.isLoading = false;
  }

  mudarDesde(valor: number) {
    // debugger
    const totalAtual = this.desde + valor;

    if (totalAtual >= this.totalRegistro || totalAtual < 0) {
      return;
    }

    this.desde = totalAtual;

    this.carregarUsuarios();
  }

  buscarUsuario(nome: string) {
    console.log(nome);
    this.isLoading = true;

    if (nome.length === 0) {
      this.carregarUsuarios();
      return;
    }

    this._usuarioService.buscarUsuarios(nome)
                        .subscribe((usuarios: Usuario[]) => {
                          console.log(usuarios);
                          this.usuarios = usuarios
                        });
                        // .subscribe((usuario) => console.log(usuario));

    this.isLoading = false;
  }

  deletarUsuario(usuarioID: string) {
    console.log('usuario')
    console.log(usuarioID)
    if (usuarioID === this._usuarioService.usuario.id) {
      alert('não pode se dletar seu burro!!');
      return;
    }

    this._usuarioService.deletarUsuario(usuarioID)
                        .subscribe(resp => {
                          console.log(resp);
                          this.carregarUsuarios();
                        });
  }

  atualizarUsuario(usuario) {
    console.log(usuario);
  }

  abrirModal(id: string) {
    this.modalService.abrirModal('usuario', id);
  }

}
