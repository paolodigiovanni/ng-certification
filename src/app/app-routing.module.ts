import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'homepage',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'forecast',
    loadChildren: () => import('./forecast/forecast.module').then(m => m.ForecastModule)
  },
  {
    path: '**',
    redirectTo: '/homepage',
    pathMatch: 'full'
  }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }