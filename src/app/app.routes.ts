import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './login/register.component';
import { LoginComponent } from './login/login.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';

const routes: Routes = [
  // { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

  // { path: '', redirectTo: 'pa', pathMatch: 'full' },

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: NopagefoundComponent },

];

export const APP_ROUTES = RouterModule.forRoot( routes, { useHash: true });
