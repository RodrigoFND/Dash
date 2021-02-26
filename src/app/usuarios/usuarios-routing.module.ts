import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosCreateComponent } from './usuarios-create/usuarios-create.component';
import { UsuariosCrudComponent } from './usuarios-crud.component';
import { UsuariosDeleteComponent } from './usuarios-delete/usuarios-delete.component';
import { UsuariosUpdateComponent } from './usuarios-update/usuarios-update.component';


const routes: Routes = [
  {path:"",component: UsuariosCrudComponent},
  {path:"novo",component: UsuariosCreateComponent},
  {path:"alterar/:id",component: UsuariosUpdateComponent},
  {path:"deletar/:id",component: UsuariosDeleteComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
