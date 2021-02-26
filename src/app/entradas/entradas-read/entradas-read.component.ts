import { CrudService } from 'src/app/service-shared/crud.service';
import { Entradas } from '../entradas.model';
import { Component, OnInit } from '@angular/core';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-entradas-read',
  templateUrl: './entradas-read.component.html',
  styleUrls: ['./entradas-read.component.css']
})
export class EntradasReadComponent implements OnInit {
  usuarios : Entradas[]
  filter : string
  constructor(private crudService:CrudService,
    ) { }
  
  ngOnInit(): void {

    this.crudService.getCrud("entradas")
    .subscribe((x : []) => {this.usuarios = x})
    
  }
  criarFormulario()
  {
    this.crudService.postCrud("entradas",{domain:"rodrigo"}).subscribe()
  }
  pesquisa()
  {
    this.crudService.getCrud("entradas").pipe( 
      map((x : Entradas[]) => x.filter(x => (this.filter?.toLowerCase() == undefined || this.filter?.toLowerCase() == "" )?
       x.status_info : x.status_info ==this.filter ) ),      
       map( x=> this.usuarios = x), 
       tap(console.log) 
    ).subscribe()
    
  }

}
