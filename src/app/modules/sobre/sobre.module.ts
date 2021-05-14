import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SobreRoutingModule } from './sobre-routing.module';
import { SobreComponent } from './sobre.component';
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatFormField } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [
    SobreComponent
  ],
  imports: [
    CommonModule,
    SobreRoutingModule,
    MatSidenavModule,
    MatFormField,
    MatOptionModule,
    MatButtonModule,
    MatSelectModule,
    NgModule
  ]
})
export class SobreModule { }
