import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForecastRoutingModule } from './forecast-routing.module';
import { ForecastPageComponent } from './forecast-page/forecast-page.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ForecastPageComponent
  ],
  imports: [
    CommonModule,
    ForecastRoutingModule,
    SharedModule
  ]
})
export class ForecastModule { }
