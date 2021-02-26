import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntradasRoutingModule } from './entradas-routing.module';
import { EntradasComponent } from './entradas.component';
import { EntradasCreateComponent } from './entradas-create/entradas-create.component';
import { EntradasReadComponent } from './entradas-read/entradas-read.component';
import { EntradasUpdateComponent } from './entradas-update/entradas-update.component';
import { MatSelectModule} from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from 	'@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
@NgModule({
  declarations: [EntradasComponent, EntradasCreateComponent, EntradasReadComponent, EntradasUpdateComponent],
  imports: [
    
    CommonModule,
    EntradasRoutingModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
 
  ]
})
export class EntradasModule { }
