import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { SubirService } from '../../service/index';
import { ModalUploadService } from './modal-upload.service';

@Component({
  selector: 'app-modal-upload',
  templateUrl: './modal-upload.component.html',
  styleUrls: ['./modal-upload.component.css']
})
export class ModalUploadComponent implements OnInit {

  // oculto: string = '';
  // usuario: Usuario;
  imagemSubir: File;
  imgTemp: string;

  constructor(private subirArquivo: SubirService,
              public modalService: ModalUploadService) { }

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

  subirImagem() {
    this.subirArquivo.subirArquivo(this.imagemSubir, this.modalService.tipo, this.modalService.id)
                      .then(resp => {
                        console.log('resp subirArquivo');
                        console.log(resp);
                        this.modalService.notificacao.emit(resp);
                        this.fecharModal();
                      })
                      .catch(err => {
                        console.log(err)
                      });
  }

  fecharModal() {
    this.imagemSubir = null;
    this.imgTemp = null;

    this.modalService.fecharModal();
  }

}
