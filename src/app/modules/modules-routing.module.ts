import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FotoComponent } from './foto/foto.component';
import { SobreComponent } from './sobre/sobre.component';
import { FormularioComponent } from './formulario/formulario.component';

const routes: Routes = [
  {path: '', component: FotoComponent},
  {path: 'sobre', component: SobreComponent},
  {path: 'formulario', component: FormularioComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesRoutingModule { }
