import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Configs } from '../../constants/configs.model';
import { Endpoints } from '../../constants/endpoints.model';
import { ForecastResponse } from '../../shared/models/forecast-response.model';
import { WeatherResponse } from '../../shared/models/weather-response.model';

@Injectable()
export class WeatherApiService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getCurrentWeather(zipcode: string): Observable<WeatherResponse> {
    return this.httpClient.get<WeatherResponse>
      (`${Endpoints.API_URL}weather?zip=${zipcode}&appid=${Configs.API_KEY}`)
      .pipe(
        map((data: WeatherResponse) => {
          return data;
        })
      )
  }

  getForecastDailyWeather(zipcode: string, count: number): Observable<ForecastResponse> {
    return this.httpClient.get<ForecastResponse>
      (`${Endpoints.API_URL}forecast/daily?zip=${zipcode}&appid=${Configs.API_KEY}&cnt=${count}`)
      .pipe(
        map((data: ForecastResponse) => {
          return data;
        })
      )
  }
}
