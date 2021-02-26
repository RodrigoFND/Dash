
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  private baseUrl = "http://localhost:3001/"

  constructor(private http: HttpClient) { }

  getCrud(componentMainUrl:string) {
    return this.http.get(`${this.baseUrl}${componentMainUrl}`)
  }


  getCrudId(componentMainUrl:string,paramsId: number) {
    let id = paramsId
    return this.http.get(`${this.baseUrl}${componentMainUrl}`).pipe(
      map((x: any[]) => x.find(x => x.id == id))
    )
  }
  
  postCrud(componentMainUrl:string,formularioValue) {
    return this.http.post(`${this.baseUrl}${componentMainUrl}`, formularioValue)

  }
  patchCrud(componentMainUrl:string,id, userValue) {
    return this.http.patch(`${this.baseUrl}${componentMainUrl}/${id}`, userValue)
  }

  putCrud(componentMainUrl:string,id, userValue) {
    return this.http.put(`${this.baseUrl}${componentMainUrl}/${id}`, userValue)
  }
  
  deleteCrud(componentMainUrl:string,id) {
    return this.http.delete(`${this.baseUrl}${componentMainUrl}/${id}`)

  }
}
