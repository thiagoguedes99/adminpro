import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './login/register.component';
import { LoginComponent } from './login/login.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { PagesComponent } from './pages/pages.component';
import { LoginGuardGuard } from './service/index';

const routes: Routes = [
  // { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

  // { path: '', redirectTo: 'pa', pathMatch: 'full' },

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: '',
    canActivate: [ LoginGuardGuard ],
    component: PagesComponent,
    // children: []
    loadChildren: 'app/pages/pages.module#PagesModule'
  },
  { path: '**', component: NopagefoundComponent },

];

export const APP_ROUTES = RouterModule.forRoot( routes, { useHash: true });
