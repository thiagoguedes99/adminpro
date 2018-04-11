import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UsuarioService } from '../index';

@Injectable()
export class AdminGuard implements CanActivate {

  constructor(
    private usuarioService: UsuarioService,
    private rota: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {

    if (this.usuarioService.usuario.role === 'ADMIN_ROLE') {
      return true
    } else {
      console.log('bloqueado pelo admin guard');
    //  this.rota.navigate(['/login']);
     this.usuarioService.logout();
      return false;
    }
    // return true;
  }
}
