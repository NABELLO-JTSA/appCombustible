import { registerLocaleData } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/inicio/login/login.component';
import { RecuperarPassComponent } from './components/inicio/recuperar-pass/recuperar-pass.component';
import { CambiarPasswordComponent } from './components/menu/cambiar-password/cambiar-password.component';
import { HomeComponent } from './components/menu/home/home.component';
import { MenuComponent } from './components/menu/menu.component';


const routes: Routes = [
  { path: '', redirectTo:'/inicio', pathMatch:'full'},
  
  { path : 'inicio', component: InicioComponent, children:[
    { path : 'recuperarPass', component: RecuperarPassComponent },
    { path: '', component: LoginComponent }
  ]}, 
  
  { path: 'menu', component: MenuComponent, children:[
    { path: '', component: HomeComponent },
    { path: 'cambiarPassword', component: CambiarPasswordComponent}
  ]},

  { path: '**', redirectTo:'/inicio', pathMatch:'full' }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {}
