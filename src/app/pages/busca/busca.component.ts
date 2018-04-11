import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.css']
})
export class BuscaComponent implements OnInit {

  usuarios: Usuario[] = [];
  hospital: any[] = [];
  medico: any[] = [];

  constructor(private activatedRoute: ActivatedRoute,
              private http: HttpClient) {
    activatedRoute.params.subscribe(resp => {
      const termino = resp['termino'];
      console.log('termino');
      console.log(termino);

      this.buscarItens(termino);
    });
  }

  ngOnInit() {
  }

  buscarItens(item: string) {
    const url = `http://localhost:3000/busca/${item}`;

    this.http.get(url)
              .subscribe((resp: any) => {
                console.log('resp');
                console.log(resp);

                this.usuarios = resp.usuario;
                this.medico = resp.medico;
                this.hospital = resp.hospital;
              });
  }

}
