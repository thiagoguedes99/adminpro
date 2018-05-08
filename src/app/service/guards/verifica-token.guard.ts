import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UsuarioService } from '../index';

@Injectable()
export class VerificaTokenGuard implements CanActivate {

  constructor(
    private usuarioService: UsuarioService,
    private rota: Router
  ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      const token = this.usuarioService.token;

      const payload = JSON.parse( atob( token.split('.')[1] ) );

      console.log('payload');
      console.log(payload);

      const tudo = JSON.parse( atob( token.split('.')[0] ) );
      console.log('tudo');
      console.log(tudo);

      if (this.expirado(payload.exp)) {
        this.rota.navigate(['/login']);
        return false;
      } else {

      }
    return true;
  }

  expirado(exp: number) {

    const agora = new Date().getTime() / 1000;

    if (exp < agora) {
      return true;
    }

    this.rota.navigate(['/login']);
    return false
  }

  verificaRenovacao(exp: number): Promise<boolean> {
    return new Promise((resolve, reject) => {

      const token = new Date(exp * 1000);
      const agora = new Date();

      agora.setTime(agora.getTime() + (4 * 60 * 60 * 1000));

      if (token.getTime() > agora.getTime()) {
        resolve(true);
      } else {
        this.usuarioService.renovarToken()
                            .subscribe(() => {
                              resolve(true);
                            }, () => {
                              this.rota.navigate(['/login']);
                              reject(false);
                            });
      }
    });
  }
}
