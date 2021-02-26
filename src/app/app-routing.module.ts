
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosModule } from './usuarios/usuarios.module';
import { EntradasModule } from './entradas/entradas.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { AuthGuard } from './guard/auth-guard';




const routes: Routes = [
  {path: "", loadChildren :'./dashboard/dashboard.module#DashboardModule',
  canActivate: [AuthGuard]},
  {path: "dashboard", loadChildren :'./dashboard/dashboard.module#DashboardModule',
  canActivate: [AuthGuard]},
  {path:"usuarios",loadChildren: './usuarios/usuarios.module#UsuariosModule',
  canActivate:[AuthGuard]},
  {path:"entradas",loadChildren: './entradas/entradas.module#EntradasModule',
  canActivate:[AuthGuard]}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
