import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { recuperarPAss } from '../../../models/recuperarPass' // exportando la clase en caprtea models

@Component({
  selector: 'app-recuperar-pass',
  templateUrl: './recuperar-pass.component.html',
  styleUrls: ['./recuperar-pass.component.css']
})
export class RecuperarPassComponent implements OnInit {
  faPhone = faPhone;
  faMailBulk = faEnvelope;
  recuperarPass : FormGroup;
  loading = false;

  constructor(private fb: FormBuilder, private toastr: ToastrService, private router:Router) { 
    this.recuperarPass = this.fb.group({
      rut: ['', Validators.required]     
    })  
  }

  ngOnInit(): void {
  }


  log(): void{
    
    const rut: recuperarPAss = {
      rut: this.recuperarPass.value.rut
    }

    this.loading = true;

    setTimeout(() => {
      if(rut.rut === '11111111-1'){
        this.router.navigate(['/login']);
        this.toastr.success('Contraseña enviada a Correo', 'Recuperar Contraseña')
        this.recuperarPass.reset();
      }else{
        this.toastr.error('RUT no existe', 'Error')
        this.recuperarPass.reset();
      }
      this.loading = false;
    
    }, 1000);

}
}
