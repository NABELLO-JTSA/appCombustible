import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Toast, ToastrService } from 'ngx-toastr';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-cambiar-password',
  templateUrl: './cambiar-password.component.html',
  styleUrls: ['./cambiar-password.component.css']
})
export class CambiarPasswordComponent implements OnInit {

  cambiarPass: FormGroup;
  loading = false;

  constructor(private fb: FormBuilder, private usuarioService: UsuarioService, private toastR: ToastrService, private router: Router) { // inyectando librerias por inyeccion de dependencias
    this.cambiarPass = this.fb.group({
      PassAnterior: ['', Validators.required],
      PassNueva: ['', [Validators.required, Validators.minLength(4)]],
      confirmarPass: ['']
    }, { validator: this.chekPassword });
  }
  
  ngOnInit(): void {
  }


  chekPassword(group: FormGroup): any{
    const pass = group.controls.PassNueva.value;
    const confirmPass = group.controls.confirmarPass.value;
    return pass === confirmPass ? null : { notSame: true };
  }

  guardarPass(): void{

    const changePass: any = {
      passAnterior: this.cambiarPass.value.PassAnterior,
      nuevaPAss: this.cambiarPass.value.PassNueva
    };

    console.log(changePass);
    this.loading = true;
      // llamndo al servicio
    this.usuarioService.cambiarPass(changePass).subscribe(data =>{
      this.router.navigate(['/menu']);
      this.toastR.info(data.message);

    }, error =>{
      this.loading = false;
      this.cambiarPass.reset();
      this.toastR.error(error.error.message, 'ERROR');
    });

  }

}
