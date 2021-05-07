import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    
  { path: 'fotos', loadChildren: () => import('./modules/fotos/fotos.module').then(m => m.FotosModule) },
  { path: 'sobre', loadChildren: () => import('./modules/sobre/sobre.module').then(m => m.SobreModule) },
  { path: 'formulario', loadChildren: () => import('./modules/formulario/formulario.module').then(m => m.FormularioModule) },
  {path: '', 
   pathMatch:'full', 
   redirectTo: '/fotos'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
