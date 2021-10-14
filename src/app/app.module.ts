import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/inicio/login/login.component';
import { RecuperarPassComponent } from './components/inicio/recuperar-pass/recuperar-pass.component';

import { MenuComponent } from './components/menu/menu.component';
import { CambiarPasswordComponent } from './components/menu/cambiar-password/cambiar-password.component';
import { NavbarComponent } from './components/menu/navbar/navbar.component';
import { HomeComponent } from './components/menu/home/home.component';
import { LoadingComponent } from './shared/loading/loading.component';



@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    LoginComponent,
    RecuperarPassComponent,
    MenuComponent,
    CambiarPasswordComponent,
    NavbarComponent,
    HomeComponent,
    LoadingComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
