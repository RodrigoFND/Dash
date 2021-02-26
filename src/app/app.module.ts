import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule}from'@angular/forms';
import { HttpClientModule }from'@angular/common/http';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider'; 
import {MatTableModule} from '@angular/material/table';
import { MatSelectModule} from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule} from '@angular/material/dialog'
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { SidenavComponent } from './template/sidenav/sidenav.component';
import { LoginModule } from './login/login.module';
//import { DashboardModule } from './dashboard/dashboard.module'; --> Usando lazyLoad
//import { EntradasModule } from './entradas/entradas.module'; --> Usando lazyLoad
//import { UsuariosModule } from './usuarios/usuarios.module'; --> Usando lazyLoad


@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
   
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDividerModule,
    MatTableModule,
    MatSelectModule,
    MatIconModule,
    MatDialogModule,
    MatSnackBarModule,
 // DashboardModule,
   
    LoginModule,
 // EntradasModule, --> Usando lazyLoad
 // UsuariosModule --> Usando lazyLoad


   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
