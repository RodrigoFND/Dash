
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { merge, concat,  forkJoin, of} from 'rxjs';
import { map, tap ,} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ValidationsService {
  private baseUrl = "http://localhost:3001/"

  constructor(private http: HttpClient) { }


 
 // Verifica se existe nome no Backend, retorn boolean
  nomeValidation(componentMainUrl:string,valorControl: string) {
    return this.http.get(`${this.baseUrl}${componentMainUrl}`).pipe(
      map((x :any []) => 
      x.find(x => x.nome == valorControl)),
      map(x => (x == undefined)? false : true),
      )
  }


  nomeIdValidation(componentMainUrl:string,paramsId: number) {
    let id = paramsId
    return this.http.get(`${this.baseUrl}${componentMainUrl}`).pipe(
      map((x: any[]) => x.find(x => x.id == id)),
      map(x => x.nome),
     
    )
  }
   // Verifica se existe email no Backend, retorna true se tiver
  emailValidation(componentMainUrl:string,valorControl: string) {
    return this.http.get(`${this.baseUrl}${componentMainUrl}`).pipe(
      map((x :any []) => 
      x.find(x => x.email == valorControl)),
      map(x => (x == undefined)? false : true)
      )
  }

 


  //Pega objeto do email(valorEmail)
  loginValidation(componentMainUrl:string,valorEmail: string) {
    return this.http.get(`${this.baseUrl}${componentMainUrl}`).pipe(
      map((x :any []) => 
      x.find(x => x.email == valorEmail)),
      tap(console.log))
      
  }



  alteraNomeValidation(componentMainUrl:string,valorControl: string) {
    return this.http.get(`${this.baseUrl}${componentMainUrl}`).pipe(
      map((x :any []) => 
      x.find(x => x.nome == valorControl)),
      map(x => x?.nome),
      tap(console.log)
    
      )
  }
















  teste(componentMainUrl:string,valorControl: string,paramsId)
  {
    //Get --> Verifica se nome existe e retorna nome
    const get$ = this.http.get(`${this.baseUrl}${componentMainUrl}`).pipe(
      map((x :any []) => 
      x.find(x => x.nome == valorControl)),
      map(x => [x?.nome]),
      tap(console.log)
      )

      //Get id --> Verifica nome Id e retorna nome
      let id = paramsId
 
     const getid$ = this.http.get(`${this.baseUrl}${componentMainUrl}`).pipe(
      map((x: any[]) => x.find(x => x.id == id)),
      map(x => [x.nome]),
      tap(console.log))

      //Verifica se Nome do Get é igual o nome do GetId

      const combinacao$ = concat(get$,getid$).pipe(
      
        tap(console.log))
        
      
        

        
      
      
        
       
        
      
      
    return  combinacao$
    
    
  }
















  alteraEmailValidation(componentMainUrl:string,valorControl: string) {
    return this.http.get(`${this.baseUrl}${componentMainUrl}`).pipe(
      map((x :any []) => 
      x.find(x => x.email == valorControl)),
      map(x => (x == undefined)? false : true)
      )
  }
 

}
