import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { UsuarioService } from '../service/index';
import { Usuario } from '../models/usuario.model';

declare function init_plugins();
declare const gapi: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  // styles: []
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  lembrar: boolean = false;
  auth2: any;

  constructor(private router: Router, private _usuarioService: UsuarioService) { }

  ngOnInit() {
    init_plugins();
    this.googleInit();

    this.email = localStorage.getItem('email') || '';
    if (this.email.length > 0) {
      this.lembrar = true;
    }
  }

  googleInit() {
    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id: '741096697265-phubr9ktscv968auhldt8k9sh8s7c73r.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
        scope: 'profile email'
      });

      this.attachSignin( document.getElementById('btnGoogle') );
    });
  }

  attachSignin(element) {
    this.auth2.attachClickHandler( element, {}, (googleUser) => {
      const profile = googleUser.getBasicProfile();
      const token = googleUser.getAuthResponse().id_token;

      console.log('googleUser');
      console.log(googleUser);
      console.log('profile');
      console.log(profile);
      console.log('token');
      console.log(token);

      this._usuarioService.loginGoogle(token)
                          .subscribe(resp => {
                            console.log(resp);
                            this.router.navigate(['/dashboard']);
                            // window.location.href = '#/dashboard';
                          });
    });
  }

  logar(form: NgForm) {
    // this.router.navigate(['/dashboard']);
    console.log(form.valid);
    console.log(form.value);

    if (form.invalid) {
      return;
    }

    const usuario = new Usuario(
      null,
      form.value.email,
      form.value.password
    );

    console.log('login com usuario')
    console.log(usuario)

    this._usuarioService.login(usuario, this.lembrar)
                        .subscribe(resp => {
                          console.log(resp);
                          this.router.navigate(['/dashboard']);
                        });

  }

}
