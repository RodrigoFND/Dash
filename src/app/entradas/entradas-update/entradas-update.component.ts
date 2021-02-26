import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CrudService } from 'src/app/service-shared/crud.service';


@Component({
  selector: 'app-entradas-update',
  templateUrl: './entradas-update.component.html',
  styleUrls: ['./entradas-update.component.css']
})
export class EntradasUpdateComponent implements OnInit {

  formulario : FormGroup
  routeId : number
  
  constructor(private crudService:CrudService,
     private router : Router,
    private activate :ActivatedRoute,
     private formBuilder : FormBuilder,
     ){}

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      status_info: [null],
      obs: ["fala algo"],
      phone : [null],
      scheduling: [null]
    })

    this.routeId = this.activate.snapshot.params["id"]

    this.verificaRota()
 
    this.crudService.getCrudId("entradas",this.routeId)
    .subscribe(x => this.formulario.patchValue(x))


  }
 
  enviarFormulario()
  {
    this.crudService.patchCrud("entradas",this.routeId,this.formulario.value)
    .subscribe(x => this.router.navigate(["/entradas"]))
  }

  verificaRota()
  {
    this.crudService.getCrudId("entradas", this.routeId).
    subscribe(x => (x)? true : this.router.navigate(["entradas"]) )

  }

}
