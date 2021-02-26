import { Usuarios } from './../usuarios.inteface';
import { ValidationsService } from './../../service-shared/validations.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CrudService } from 'src/app/service-shared/crud.service';
import { count, first, map, mergeMap, tap } from 'rxjs/operators';
import { EventListenerFocusTrapInertStrategy } from '@angular/cdk/a11y';
import { of, iif, from } from 'rxjs';


@Component({
  selector: 'app-usuarios-update',
  templateUrl: './usuarios-update.component.html',
  styleUrls: ['./usuarios-update.component.css']
})
export class UsuariosUpdateComponent implements OnInit {

  id: number
  usuarioForm: FormGroup
  primeiraValidacao = false
  segundaValidacao = false

  constructor(private validationsService: ValidationsService
    , private crud: CrudService,
    private formBuilder: FormBuilder, private activate: ActivatedRoute,
    private router: Router, private _snackBar: MatSnackBar) { }


  ngOnInit(): void {
    this.usuarioForm = this.formBuilder.group({
      nome: ["", [Validators.required]],
      email: [null, [Validators.required, Validators.email],this.verificaEmail.bind(this)],
      senha: [null, [Validators.required]],
      categoria: ["admin"],
      isValid: []

    })
    //Pega parametro da rota
    this.id = this.activate.snapshot.params["id"]

    //Verifica se id da rota existe
    this.verificaRota()


    //Traz objeto da rota e coloca no usuarioForm
    this.crud.getCrudId("usuarios", this.id).
      subscribe(x => this.usuarioForm.patchValue(x))

  }

  verificaRota() {
    this.crud.getCrudId("usuarios", this.id).
      subscribe(x => (x) ? true : this.router.navigate(["usuarios"]))

  }


  verificaValid(): string {

    if (this.usuarioForm.get("email").invalid) {
      this.usuarioForm.get("email").markAsTouched()
      return "Email invalido ou já existe."

    }

  }

  verificaEmail(formControl : FormControl)
  {
    return this.validationsService.emailValidation("usuarios",formControl.value).pipe(
      map(emailExiste => (emailExiste == true)? {emailInvalido : true} : null),
      tap(console.log)
    )

  }

  atualizarForm() {

    let emailValue = this.usuarioForm.get("email").value
    let senhaValue = this.usuarioForm.get("senha").value

    //Validar Formulario
    if (this.usuarioForm.invalid) {

      this._snackBar.open(this.verificaValid(), "x", {
        duration: 3000,
        verticalPosition: "top",
        horizontalPosition: "end"
      })
      return
    }
    this.crud.patchCrud("usuarios", this.id, {email : emailValue,senha : senhaValue})
      .subscribe(x => {
        this._snackBar.open("Usuário alterado com sucesso", "X", {
          duration: 3000,
          horizontalPosition: "end",
          verticalPosition: "top"
        });
        this.router.navigateByUrl(`/usuarios`)

      })

  }
}
