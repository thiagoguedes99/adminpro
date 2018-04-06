import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { UsuarioService } from '../../service/index';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: []
})
export class ProfileComponent implements OnInit {

  usuario: Usuario;
  imagemSubir: File;
  imgTemp: string;

  constructor(public _usuarioService: UsuarioService) {
    this.usuario = this._usuarioService.usuario;
  }

  ngOnInit() {
  }

  selecaoImagem(artigo) {
    if (!event) {
      return;
    }
    console.log(artigo)
    if (!artigo.type.includes('image')) {
      alert('só pode fotos mano!');
      return;
    }
    this.imagemSubir = artigo;

    const reader = new FileReader();
    // const urlImageTemp = reader.readAsDataURL(artigo);
    reader.readAsDataURL(artigo);

    reader.onloadend = () => {
      // console.log(reader.result);
      this.imgTemp = reader.result;
    };
  }

  mudarImagem() {
    this._usuarioService.mudarImagem(this.imagemSubir, this.usuario.id);
  }

}
