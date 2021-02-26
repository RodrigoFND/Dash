import { CrudService } from 'src/app/service-shared/crud.service';
import { Entradas } from './entradas.model';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entradas',
  templateUrl: './entradas.component.html',
  styleUrls: ['./entradas.component.css']
})
export class EntradasComponent implements OnInit {
total
  constructor(private crudService:CrudService,
     private http : HttpClient) { }

  ngOnInit(): void {
    this.crudService.getCrud("entradas").subscribe((x : Entradas[]) =>this.total = x.length)
  }



}
