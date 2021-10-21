import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nombreUsuario: string | any;

  constructor(private loginServices:LoginService) { } // inyectar servicio

  ngOnInit(): void {

    this.getNombreUsuario();
  }


  getNombreUsuario(): void{
    this.nombreUsuario = this.loginServices.getNombreUsuario();

 }

}
