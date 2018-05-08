import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { SettingService,
        SharedService,
        SidebarService,
        SubirService,
        UsuarioService,
        LoginGuardGuard,
        HospitalService,
        AdminGuard,
        VerificaTokenGuard } from './index';

import { ModalUploadService } from '../components/modal-upload/modal-upload.service';
        // UploadImagemService} from './index';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [ SettingService,
               SharedService,
               SidebarService,
               SubirService,
               UsuarioService,
               LoginGuardGuard,
               ModalUploadService,
               HospitalService,
               AdminGuard,
               VerificaTokenGuard
              //  UploadImagemService
            ],
  declarations: []
})
export class ServiceModule { }
