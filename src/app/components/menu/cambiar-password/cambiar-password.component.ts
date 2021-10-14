import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cambiar-password',
  templateUrl: './cambiar-password.component.html',
  styleUrls: ['./cambiar-password.component.css']
})
export class CambiarPasswordComponent implements OnInit {

  cambiarPass: FormGroup;

  constructor(private fb: FormBuilder) { 
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
    console.log(this.cambiarPass)
  }

}
