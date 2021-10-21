import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from 'src/app/services/login.service';
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

  constructor(private fb: FormBuilder, private toastr: ToastrService, private router: Router, private loginService: LoginService) {
    this.login = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required]
    })
   }

  ngOnInit(): void {    
  }

  log(): void{    
    const usuario: Usuario = {
      abrev_usuario: this.login.value.usuario,
      nom_usuario:'',
      password: this.login.value.password,
      mail: '',
      fec_add: new Date(),
      est_activo: 1,
      est_primer_ingreso: 1,
      num_intentos: 0,     
    };

    this.loading = true;

    this.loginService.login(usuario).subscribe(data =>{
      console.log(data);
      this.loading=false;
      this.loginService.setLocalStorage(data.usuario); // guardar variables generales
      this.router.navigate(['/menu']);
    }, error =>{
      console.log(error);
      this.loading = false;
      this.toastr.error(error.error.message, 'Error');
      this.login.reset();
    });

  }
}

