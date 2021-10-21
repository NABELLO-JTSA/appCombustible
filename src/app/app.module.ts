import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


// Modulos
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'; // para hacer peticiones http hacia fuera

//Componentes
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
import { RegisterComponent } from './components/menu/register/register.component';



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
    RegisterComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    HttpClientModule // hacer peticiones hhttp hacia afuera
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
