import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// modulos de terceiros
import { ChartsModule } from 'ng2-charts';

// modulos do projeto
import { SharedModule } from '../shared/shared.module';

// rotas do projeto
import { PAGES_ROUTES } from './pages.route';

import { ModalUploadComponent } from '../components/modal-upload/modal-upload.component';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';
import { AccoutSettingsComponent } from './accout-settings/accout-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { PipesModule } from '../pipes/pipes.module';
import { ProfileComponent } from './profile/profile.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { HostipaisComponent } from './hostipais/hostipais.component';
import { MedicosComponent } from './medicos/medicos.component';
import { MedicoComponent } from './medicos/medico/medico.component';
import { BuscaComponent } from './busca/busca.component';




@NgModule({
  declarations: [
    ModalUploadComponent,
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    IncrementadorComponent,
    GraficoDonaComponent,
    AccoutSettingsComponent,
    PromesasComponent,
    RxjsComponent,
    ProfileComponent,
    UsuariosComponent,
    HostipaisComponent,
    MedicosComponent,
    MedicoComponent,
    BuscaComponent
  ],
  exports: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ChartsModule,
    SharedModule,
    PipesModule,
    PAGES_ROUTES,
  ]
})
export class PagesModule {}
