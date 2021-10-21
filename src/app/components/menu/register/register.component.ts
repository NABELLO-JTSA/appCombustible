import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  register: FormGroup;
  loading = false;

  constructor(private fb: FormBuilder, private usuarioService: UsuarioService, private router: Router, private toastR: ToastrService) { // llamando al servicio creado se guarda todo en usuarioService compareeeeeee
    this.register = this.fb.group({
      txtNomPersonal: ['', Validators.required],
      txtNomUsuario: ['', Validators.required],
      txtEmail: ['', Validators.required],
      txtPassNueva: ['', [Validators.required, Validators.minLength(4)]],
      txtConfirmarPass: ['']
    }, { validator: this.chekPassword });
  }
  
  ngOnInit(): void {
  }

   // metodo que ejuta el boton del form
   registrar(): void{
    console.log(this.register);

    // se crea constante usuario donde le seteamos los valores
      const usuario: Usuario = {
        abrev_usuario: this.register.value.txtNomUsuario,
        nom_usuario: this.register.value.txtNomPersonal,
        mail: this.register.value.txtEmail,
        password: this.register.value.txtConfirmarPass,
        fec_add: new Date(),
        est_activo: 1,
        est_primer_ingreso: 1,
        num_intentos: 0
      };

      this.loading=true;
  
      //llamando al servicio
      this.usuarioService.saveUser(usuario).subscribe(data=>{
        console.log(data);
        this.toastR.success('Usuario ' + usuario.abrev_usuario + ' registrado', 'Registrar Usuario');
        this.register.reset();
       // this.router.navigate(['/inicio/login']) // para redireccionar cuando se ejecute algun proceso
        this.loading = false;
      }, error =>{
        this.loading = false;
        console.log(error);
        this.register.reset();
        //this.toastR.error('Usuario ' + usuario.abrev_usuario + ' ya existe', 'Registro Fallido');
        this.toastR.error(error.error.message, 'Registro Fallido');
      });
  
    }

    
  chekPassword(group: FormGroup): any{
    const pass = group.controls.txtPassNueva.value;
    const confirmPass = group.controls.txtConfirmarPass.value;
    return pass === confirmPass ? null : { notSame: true };
  }

 
}
