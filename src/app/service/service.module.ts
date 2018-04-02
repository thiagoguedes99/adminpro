import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { SettingService,
        SharedService,
        SidebarService,
        SubirService,
        UsuarioService,
        LoginGuardGuard } from './index';
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
              //  UploadImagemService
            ],
  declarations: []
})
export class ServiceModule { }
