import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarLoginComponent } from './navbar-login/navbar-login.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WsLogoComponent } from './ws-logo/ws-logo.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarLoginComponent,
    LoginPageComponent,
    RegisterPageComponent,
    NavbarComponent,
    WsLogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
