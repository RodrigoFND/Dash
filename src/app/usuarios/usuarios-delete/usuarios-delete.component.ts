import { Usuarios } from '../usuarios.inteface';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CrudService } from 'src/app/service-shared/crud.service';

@Component({
  selector: 'app-usuarios-delete',
  templateUrl: './usuarios-delete.component.html',
  styleUrls: ['./usuarios-delete.component.css']
})
export class UsuariosDeleteComponent implements OnInit {
  usuario: FormGroup
  id: number



  constructor(private crud: CrudService,
    private _snackBar: MatSnackBar,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private ActivatedRoute: ActivatedRoute) { }


  ngOnInit(): void {

    this.usuario = this.formBuilder.group({
      nome: [{ value: "", disabled: true }],
      email: [{ value: "", disabled: true }],
      senha: [{ value: "", disabled: true }],
      categoria: [{ value: "", disabled: true }]
    })
    this.id = this.ActivatedRoute.snapshot.params["id"]

    //Verifica se Id da rota existe
    this.verificaRota()

    //Pega parametro id da tela

    
    this.crud.getCrudId("usuarios",this.id)
      .subscribe((x: Usuarios[]) => this.usuario.patchValue(x))
  }

  deletar() {
    

    this.crud.deleteCrud("usuarios",this.id).subscribe(x => {
      this._snackBar.open("Usuário deletado com sucesso", "x", {
        duration: 3000,
        verticalPosition: "top",
        horizontalPosition: "end"
      });
      this.router.navigateByUrl("/usuarios");
    }) 

  }


  verificaRota()
  {
    this.crud.getCrudId("usuarios", this.id).
    subscribe(x => (x)? true : this.router.navigate(["usuarios"]) )

  }




}


