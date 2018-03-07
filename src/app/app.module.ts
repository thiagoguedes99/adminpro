import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


// rotas
import { APP_ROUTES } from './app.routes';

// modulos
import { PagesModule } from './pages/pages.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { RegisterComponent } from './login/register.component';
// import { SettingService } from './service';
import { ServiceModule } from './service/service.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NopagefoundComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ServiceModule,
    APP_ROUTES,
    PagesModule
  ],
providers: [/*SettingService*/],
  bootstrap: [AppComponent]
})
export class AppModule { }
