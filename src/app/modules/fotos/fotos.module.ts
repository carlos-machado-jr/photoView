import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FotosRoutingModule } from './fotos-routing.module';
import { FotosComponent } from './fotos.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card'


@NgModule({
  declarations: [
    FotosComponent
  ],
  imports: [
    CommonModule,
    FotosRoutingModule,
    MatButtonModule,
    MatCardModule,
    
  ]
})
export class FotosModule { }
