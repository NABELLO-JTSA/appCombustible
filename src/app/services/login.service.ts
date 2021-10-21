import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  myAppUrl: string;
  myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endPoint;
    this.myApiUrl = '/api/Login'; 
  }

  login(usuario: Usuario): Observable<any>{
    return this.http.post(this.myAppUrl + this.myApiUrl, usuario);
  }

  setLocalStorage(data: any): void {
    localStorage.setItem('nombreUsuario', data); // se almacena variable
  }

  getNombreUsuario(): string | any{
   return localStorage.getItem('nombreUsuario'); // para obtener el nombre
  }

  removeLocalStorage(): void{
    localStorage.removeItem('nombreUsuario'); // eliminar el nombre al cerrar
  }

}
