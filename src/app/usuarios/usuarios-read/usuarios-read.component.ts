import { CrudService } from 'src/app/service-shared/crud.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { debounceTime, map, tap } from 'rxjs/operators';
import { Usuarios } from '../usuarios.inteface';


@Component({
  selector: 'usuarios-read',
  templateUrl: './usuarios-read.component.html',
  styleUrls: ['./usuarios-read.component.css']
})
export class UsuariosReadComponent implements OnInit {
filter : string

usuarios : Array<Object>
  constructor(private crudService:CrudService,private http : HttpClient) { }

  ngOnInit(): void {
    this.crudService.getCrud("usuarios")
    .subscribe((dados : Array<Object>)=>{this.usuarios = dados})

    
  }
 
  pesquisa()
  {
    this.crudService.getCrud("usuarios").pipe( 
      map((x : Usuarios[]) => x.filter(x => (this.filter?.toLowerCase() == undefined || this.filter?.toLowerCase() == "" )?
       x.nome : x.nome ==this.filter ) ),      
       map( x=> this.usuarios = x), 
       tap(console.log) 
    ).subscribe()
    
  }

  

}
