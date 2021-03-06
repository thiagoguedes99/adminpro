import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccoutSettingsComponent } from './accout-settings/accout-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginGuardGuard, AdminGuard, VerificaTokenGuard } from '../service/index';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { HostipaisComponent } from './hostipais/hostipais.component';
import { MedicosComponent } from './medicos/medicos.component';
import { BuscaComponent } from './busca/busca.component';


const routes: Routes = [
  // { path: 'pa', component: PagesComponent,
  // { path: '',
  //   canActivate: [ LoginGuardGuard ],
  //   component: PagesComponent,
  //   children: [
      {
        path: 'dashboard',
        canActivate: [ VerificaTokenGuard ],
        component: DashboardComponent,
        data: { titulo: 'Dashboard' }
      },
      { path: 'progress', component: ProgressComponent, data: {titulo: 'Progress Bar'} },
      { path: 'graficas1', component: Graficas1Component, data: {titulo: 'Gráficos'} },
      { path: 'promessas', component: PromesasComponent, data: {titulo: 'Promises'} },
      { path: 'rxjs', component: RxjsComponent, data: {titulo: 'Rxjs'} },
      { path: 'account-settings', component: AccoutSettingsComponent, data: {titulo: 'Account Setting'} },
      { path: 'perfil', component: ProfileComponent },
      { path: 'busca/:termino', component: BuscaComponent },

      // mantenimentos
      {
        path: 'usuarios',
        canActivate: [ AdminGuard ],
        component: UsuariosComponent
      },
      { path: 'hospitais', component: HostipaisComponent },
      { path: 'medicos', component: MedicosComponent }
    // ]
  // },
];

export const PAGES_ROUTES = RouterModule.forChild( routes );
