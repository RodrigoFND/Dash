import { AuthService } from './login/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'frontend';

  autentica = false;
  

  constructor(public auth : AuthService)
  {
    this.auth.enviarAutenticacao
   


  }
  ngOnInit():void
  {
    this.auth.enviarAutenticacao.subscribe((x : boolean) => this.autentica = x)

  }
}
