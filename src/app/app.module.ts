import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

import { RouterModule } from '@angular/router';

//MODULOS PARA INICIA AS SESSOES COM REDES SOCIAIS
import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider, FacebookLoginProvider } from "angularx-social-login";

let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("Google-OAuth-Client-Id")
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("Facebook-App-Id")
  }
]);

export function provideConfig() {
  return config;
}


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    FormsModule,
    RouterModule ,
    SocialLoginModule
  ],
  providers: [
  {
    provide: AuthServiceConfig,
    useFactory: provideConfig
  }
],
  bootstrap: [AppComponent]
})

export class AppModule { }
