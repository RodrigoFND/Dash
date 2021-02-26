import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuariosCrudComponent } from './usuarios-crud.component';
import { UsuariosCreateComponent } from './usuarios-create/usuarios-create.component';
import { UsuariosReadComponent } from './usuarios-read/usuarios-read.component';
import { UsuariosUpdateComponent } from './usuarios-update/usuarios-update.component';
import { UsuariosDeleteComponent } from './usuarios-delete/usuarios-delete.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {  ReactiveFormsModule}from'@angular/forms';
import { HttpClientModule }from'@angular/common/http';
import { MatDividerModule } from '@angular/material/divider'; 
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule} from '@angular/material/dialog'
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { FormsModule }   from '@angular/forms';




@NgModule({
  declarations: [
    UsuariosCrudComponent,
    UsuariosCreateComponent,
    UsuariosReadComponent,
    UsuariosUpdateComponent,
    UsuariosDeleteComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    UsuariosRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDividerModule,
    MatTableModule,
    MatSelectModule,
    MatIconModule,
    MatDialogModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatListModule,
  ],
  exports : [
    UsuariosCrudComponent
  ]
})
export class UsuariosModule { }
