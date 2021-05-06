import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulesRoutingModule } from './modules-routing.module';
import { FotoComponent } from './foto/foto.component';
import { FormularioComponent } from './formulario/formulario.component';
import { SobreComponent } from './sobre/sobre.component';


@NgModule({
  declarations: [
    FotoComponent,
    FormularioComponent,
    SobreComponent
  ],
  imports: [
    CommonModule,
    ModulesRoutingModule
  ]
})
export class ModulesModule { }
