import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

// import * as swal from 'sweetalert';

import { UsuarioService } from '../service/index';
import { Usuario } from '../models/usuario.model';
import { Router } from '@angular/router';
// import swal from 'sweetalert';

declare function init_plugins();

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  // styles: []
  styleUrls: ['./login.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup = new FormGroup(
    {
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [ Validators.required, Validators.email ]),
      password: new FormControl(null, Validators.required),
      password2: new FormControl(null, Validators.required),
      condition: new FormControl(false)
    },
    {
      validators: this.saoIguais('password', 'password2')
    }
  );

  constructor(public _usuarioService: UsuarioService, private rota: Router) { }

  ngOnInit() {
    init_plugins();
  }

  saoIguais(password: string, password2: string) {
    return (group: FormGroup) => {
       const pass = group.controls[password].value;
       const pass2 = group.controls[password2].value;

       if (pass == pass2) {
         return null;
       };

       return {
        igual: true
       };
    }
  }

  registrar() {

    if (!this.form.value.condition) {
      console.log('deve aceitar as condições');
      // swal('Importante', 'Deve aceitar as condições!', 'warning');
      // swal();
      // alert('Deve aceitar as condições!');
    }
    console.log(this.form.value);

    const usuario = new Usuario(
      this.form.value.name,
      this.form.value.email,
      this.form.value.password
    );

    this._usuarioService.criarUsuario(usuario)
                        .subscribe(resp => {
                          console.log(resp);
                          this.rota.navigate(['/login']);
                        });
  }

}
