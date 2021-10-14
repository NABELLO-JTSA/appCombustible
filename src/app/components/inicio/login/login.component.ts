import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from '../../../models/usuario' // exportando la clase en caprtea models


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  faPhone = faPhone;
  faMailBulk = faEnvelope;

  login: FormGroup;

  loading = false;

  constructor(private fb: FormBuilder, private toastr: ToastrService, private router: Router) {
    this.login = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required]
    })
   }

  ngOnInit(): void {
    
  }

  log(): void{
    
    const usuario: Usuario = {
      nombreUsuario: this.login.value.usuario,
      password: this.login.value.password    
    }

    this.loading = true;

    setTimeout(() => {
      if(usuario.nombreUsuario === 'nabello' && usuario.password ==="1234"){
        this.router.navigate(['/menu']);
        this.login.reset();
      }else{
        this.toastr.error('Datos incorrectos', 'Error')
        this.login.reset();
      }
      this.loading = false;
    
    }, 1000);

  }

}
