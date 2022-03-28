import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForecastPageComponent } from './forecast-page/forecast-page.component';

const routes: Routes = [
  {
    path: '',
    component: ForecastPageComponent
  },
  {
    path: ':zipcode',
    component: ForecastPageComponent
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ForecastRoutingModule { }