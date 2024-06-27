import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'maps',
    loadChildren: () => import('./maps/maps.module').then(m => m.MapsModule),
  },

  //usamos lazy load para cargar este componente, pero solo el componente
  {
    path:'alone',
    loadComponent: () => import('./alone/pages/alone-page/alone-page.component').then(c => c.AlonePageComponent),
  },
  {
    path:'**',
    redirectTo: 'maps',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
