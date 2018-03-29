import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { UsuarioService } from '../index';

@Injectable()
export class LoginGuardGuard implements CanActivate {

  constructor(private _usuarioService: UsuarioService,
              private _rota: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      console.log('passou login guard');
    // return true;
    // return this._usuarioService.estaLogado();

    if (this._usuarioService.estaLogado()) {
      return true;
    } else {
      this._rota.navigate(['/login']);
      return false;
    }
  }
}
