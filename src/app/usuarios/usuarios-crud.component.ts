import { CrudService } from 'src/app/service-shared/crud.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios-crud',
  templateUrl: './usuarios-crud.component.html',
  styleUrls: ['./usuarios-crud.component.css']
})
export class UsuariosCrudComponent implements OnInit {
  baseUrl="http://localhost:3001/usuarios"
  totalUsuarios
  constructor(private crudService:CrudService) {
    this.crudService.getCrud("usuarios")
    .subscribe((subscriber: []) => {this.totalUsuarios = subscriber.length;})
   }

  ngOnInit(): void {
    

  }

  //Resolve bug(pagina nao atualiza campo de "total usuarios")
  atualizar()
  {
    this.crudService.getCrud("usuarios")
    .subscribe((subscriber: []) => {this.totalUsuarios = subscriber.length;console.log("Entrei " + subscriber.length )})

  }

}
