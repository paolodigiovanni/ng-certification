import { Injectable } from '@angular/core';
import { WeatherMap } from '../../shared/models/weather-map.model';

@Injectable()
export class WeatherStorageService {

  constructor() { }

  getWeatherMaps(): WeatherMap[] {
    return JSON.parse(localStorage.getItem('weatherMaps') || '[]');
  }

  updateWeatherMaps(data: WeatherMap[]): void {
    localStorage.setItem('weatherMaps', JSON.stringify(data));
  }
}
