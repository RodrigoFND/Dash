
import { Usuarios } from './../usuarios/usuarios.inteface';
import { CrudService } from 'src/app/service-shared/crud.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Entradas } from '../entradas/entradas.model';
import { map, tap } from 'rxjs/operators';
import { Chart } from 'chart.js'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @ViewChild("myChart", { static: true }) canvasComponent: ElementRef
  @ViewChild("myChart2", { static: true }) canvasComponent2: ElementRef
  dash
  chart
  chart2
  entradas_pendentes: number
  vendas_canceladas: number
  entradas_agendadas: number
  vendas_finalizadas: number

  constructor(private crudService: CrudService) { }

  ngOnInit(): void { //Inicio on Init
    this.dash = {
      users: 10,
      entradas: null,
      vendas: null
    }

    this.chart = new Chart(this.canvasComponent.nativeElement, {
      type: "pie",
      data: {
        labels: ["Entradas Pendentes", "Entradas Agendadas", "Vendas Canceladas", "Vendas Finalizadas"],
        datasets: [{
          data: [3, 3, 1, 10],
          backgroundColor: ["#0052ce", "#a500ce", "#ce0000", "#00ce52"],
          fill: true
        }]
      },
      options: {
        legend: {
          display: true,
          position: "right",
          labels: {
          }
        },
      }
    })
    

    this.chart2=  new Chart(this.canvasComponent2.nativeElement, {
      type: "bar",
      data: {
        labels: ["Entradas Pendentes", "Entradas Agendadas","Vendas Canceladas", "Vendas Finalizadas"],
        datasets: [{
          
          data: [2, 2, 2, 2],
          backgroundColor: ["#0052ce",  "#a500ce","#ce0000", "#00ce52"],
          fill: true
        }]
      },
      options: {
        scales : {
          yAxes: [{
            ticks: {
              min: 0,
            },
        }]
        },
        legend: {
          display: false,
          position: "right",
          labels: {
          }
        },
      }
    })

    this.atribuirValoresDash()

  } //Fim on Init

  atribuirValoresDash()
  {
     //Coloca valor no dashBoard "Usuarios Cadastros"

     this.crudService.getCrud("usuarios")
     .subscribe((x: Usuarios[]) =>
       this.dash.users = x.length)

   //Coloca valor no dashBoard "Total de Entradas"

   this.crudService.getCrud("entradas")
     .subscribe((x: Entradas[]) =>
       this.dash.entradas = x.length)


   /*Procura no array de entradas objetos 
   que tenham status_info =="venda concluida" e 
   Coloca valor no dashBoard "Total de Vendas"*/

   this.crudService.getCrud("entradas").pipe(
     map((x: Entradas[]) => x.filter(x => x.status_info == "concluida")),
   
   ).subscribe((x: []) => this.dash.vendas = x.length)

   this.chart.config.data.datasets[0].data["1"] = this.vendas_canceladas
   
   //Grafico 1 e 2 Add Entradas Pendentes
   this.crudService.getCrud("entradas").pipe(
     map((x : Entradas[]) => x.filter( x => x.status_info=="pendente")),
    
   ).subscribe((x: []) => 
   {this.chart.config.data.datasets[0].data["0"] = x.length;
    this.chart2.config.data.datasets[0].data["0"] = x.length;})

   

   //Grafico 1 e 2 Add venda Agendada
   this.crudService.getCrud("entradas").pipe(
     map((x: Entradas[]) => x.filter(x => x.status_info == "agendado")),
   ).subscribe((x: []) => 
   {this.chart.config.data.datasets[0].data["1"] = x.length;
    this.chart2.config.data.datasets[0].data["1"] = x.length;})

    //Grafico 1 e 2 Add venda Cancelada
   this.crudService.getCrud("entradas").pipe(
     map((x: Entradas[]) => x.filter(x => x.status_info == "cancelado")),
   ).subscribe((x: []) => 
   {this.chart.config.data.datasets[0].data["2"] = x.length;
    this.chart2.config.data.datasets[0].data["2"] = x.length;})

    //Grafico 1 e 2 Add venda Finalizada
    this.crudService.getCrud("entradas").pipe(
     map((x: Entradas[]) => x.filter(x => x.status_info == "concluida")),
   ).subscribe((x: []) => 
   {this.chart.config.data.datasets[0].data["3"] = x.length;
    this.chart2.config.data.datasets[0].data["3"] = x.length;})

   //Coloca valor total de entradas no Grafico 2 e atualiza Grafico 1 e 2

   this.crudService.getCrud("entradas")
   .subscribe((x: Entradas[]) =>
   {this.chart2.options.scales.yAxes[0].ticks.max = x.length;
     this.chart.update();
     this.chart2.update()})


  }
 

 


}
