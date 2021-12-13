import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouteReuseStrategy } from '@angular/router';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    LoginPageRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
  ],
  declarations: [LoginPage,LoginComponent],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],

})
export class LoginPageModule {}
