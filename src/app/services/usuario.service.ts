import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {

  myAppUrl: string;
  myApiUrl: string;

  constructor(private http: HttpClient) { 
    this.myAppUrl = environment.endPoint;
    this.myApiUrl= '/api/Usuario';
  }

  saveUser(usuario: Usuario): Observable<any>{  // obserbable un tipo de comunicacion con el backend    
    return this.http.post(this.myAppUrl + this.myApiUrl, usuario);
  }

  cambiarPass(changePass: any): Observable<any>{
    return this.http.put(this.myAppUrl + this.myApiUrl + '/CambiarPass', changePass);
  }
  
}
