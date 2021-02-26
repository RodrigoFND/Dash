import { Route } from '@angular/compiler/src/core';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../login/auth.service';



@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{

  constructor(private route:Router,private authService:AuthService) { }


  canActivate( route : ActivatedRouteSnapshot,
    state : RouterStateSnapshot) : Observable<boolean> | boolean
  {
    if(this.authService.usuarioEstaAutenticado())
    {
      return true

    }
    this.route.navigate(["/login"])
    return false

   

  }
 
  
}
