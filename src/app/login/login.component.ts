import { MatSnackBar } from '@angular/material/snack-bar';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ValidationsService } from '../service-shared/validations.service';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formulario : FormGroup

  constructor(private auth:AuthService,
    private router: Router,private snackBar : MatSnackBar,
    private validatorsService : ValidationsService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      email: ["novo@hotmail.com",[Validators.required,Validators.email]],
      senha: ["123",[Validators.required]],
      isValid: [null,[],]
    })


  }

  confirmarValidacao()
  {
    let formEmail = this.formulario.get("email").value
    let formSenha = this.formulario.get("senha").value

    if(formSenha == undefined || formSenha == null)
    {
      console.log(formSenha)
      formSenha= "0";
    }

    //Pega o objeto do email e valida a senha

   return this.validatorsService.loginValidation("usuarios",formEmail)
    .pipe (map (x => x?.senha == formSenha))
  }

  mostrarForm()
  {
    this.auth
    this.confirmarValidacao().subscribe(x => (x)?  this.auth.usuarioValido() : 
    this.auth.usuarioInvalido());
    
 
  }

}
