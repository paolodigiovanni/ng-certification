import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { WeatherStorageService } from './services/weather-storage.service';
import { WeatherApiService } from './services/weather-api.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    WeatherApiService,
    WeatherStorageService
  ]
})
export class CoreModule { }
