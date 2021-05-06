import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', 
    pathMatch:'full', 
    redirectTo: '/fotos'
  },
  {path: 'fotos', loadChildren: () => import('./modules/modules.module').then(m => m.ModulesModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
