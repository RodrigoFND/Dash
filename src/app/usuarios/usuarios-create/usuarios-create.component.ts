import { ValidationsService } from './../../service-shared/validations.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CrudService } from 'src/app/service-shared/crud.service';
import {  map, tap } from 'rxjs/operators';


@Component({
  selector: 'usuarios-create',
  templateUrl: './usuarios-create.component.html',
  styleUrls: ['./usuarios-create.component.css']
})
export class UsuariosCreateComponent implements OnInit {

  formulario: FormGroup

  constructor(private validationsService:ValidationsService
    ,private crudService: CrudService,
    private _snackBar: MatSnackBar,
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nome: ["", [Validators.required],this.validarNome.bind(this)],
      email: [null, [Validators.required, Validators.email],this.validarEmail.bind(this)],
      senha: [null, [Validators.required]],
      categoria: ["admin"],
     
    })
  }

  


 
  verificaValid() : string
  {
  
   if(this.formulario.get("nome").invalid)
   {
     this.formulario.get("nome").markAsTouched()
     return "Usuário invalido ou já existe."
        
   }else if(this.formulario.get("email").invalid)
   {
     this.formulario.get("email").markAsTouched()
     return "Email inválido ou já existe."
   }
   else if(this.formulario.get("senha").invalid)
   {
     this.formulario.get("email").markAsTouched()
     return "Senha inválida."
   }

  }

  validarNome(formControl : FormControl)
  {
     return this.validationsService.nomeValidation("usuarios",formControl.value)
    .pipe(
      map((nomeExiste => (nomeExiste)? {nomeInvalido: true} : null )))
  }

  validarEmail(formControl : FormControl)
  {
    return this.validationsService.emailValidation("usuarios",formControl.value).pipe(
      map(emailExiste => (emailExiste)? {emailInvalido : true} : false),
      tap(console.log)
    )
  }

  cadastrarFormulario() {

    //Validação do cadastro
    if (this.formulario.invalid) {
      
      this._snackBar.open(this.verificaValid(), "x", {
        duration: 3000,
        verticalPosition: "top",
        horizontalPosition: "end"
      })
      return
    }else {
 
      this.crudService.postCrud("usuarios",this.formulario.value).subscribe();
      this._snackBar.open("Usuario Cadastrado com sucesso!", "x", {
        duration: 3000,
        verticalPosition: "top",
        horizontalPosition: "end"
      }),
        this.router.navigate(["/usuarios"])
    }

  }

}
