import { EntradasCreateComponent } from './entradas-create/entradas-create.component';
import { EntradasComponent } from './entradas.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntradasUpdateComponent } from './entradas-update/entradas-update.component';

const routes: Routes = [
  {path:"",component:EntradasComponent},
  
  {path:"create",component:EntradasCreateComponent},
  {path:":id",component:EntradasUpdateComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntradasRoutingModule { }
