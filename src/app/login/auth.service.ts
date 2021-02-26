import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { EventEmitter, Injectable } from '@angular/core';
import { AuthGuard } from '../guard/auth-guard';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

 public usuarioAutentica : boolean = false;

 //Tira sidenav e mostra login caso falso
 public enviarAutenticacao = new EventEmitter<boolean>() 

  constructor(
     private router : Router,
     private snackBar : MatSnackBar) { }

  usuarioValido()
  {
    this.usuarioAutentica = true;
    this.enviarAutenticacao.emit(true)
    this.router.navigate(["dashboard"])
    console.log(this.usuarioAutentica)
  }

  usuarioInvalido()
  {
    this.usuarioAutentica = false;
    this.enviarAutenticacao.emit(false)
    this.snackBar.open("Usuário ou senha inválida","x",{
      duration : 3000,
      verticalPosition: "top",
      horizontalPosition: "end"
    })
  }

  usuarioEstaAutenticado()
  {
    return this.usuarioAutentica

  }
  tirarAutenticacao()
  {
    this.usuarioAutentica = false;
    this.router.navigate(["login"])
    this.enviarAutenticacao.emit(false)
    
    

    
  }
}
