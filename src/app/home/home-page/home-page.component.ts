import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { WeatherApiService } from '../../core/services/weather-api.service';
import { WeatherStorageService } from '../../core/services/weather-storage.service';
import { WeatherMap } from '../../shared/models/weather-map.model';
import { WeatherResponse } from '../../shared/models/weather-response.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  weatherMaps: WeatherMap[];

  constructor(
    private weatherApiService: WeatherApiService,
    private weatherStorageService: WeatherStorageService
  ) { }

  ngOnInit(): void {
    this.weatherMaps = this.weatherStorageService.getWeatherMaps();
  }

  showWeatherDetails(zipcode: string): void {
    if (this.weatherMaps.findIndex((element: WeatherMap) => element.key == zipcode) != -1) {
      alert("The zipcode you are trying to add is already in the list")
    } else {
      this.weatherApiService.getCurrentWeather(zipcode).subscribe(
        (data: WeatherResponse) => {
          this.weatherMaps.unshift({ key: zipcode, value: data });
          this.weatherStorageService.updateWeatherMaps(this.weatherMaps);
        },
        (error: HttpErrorResponse) => {
          alert(error?.error?.message);
        }
      )
    }
  }

  removeWeatherDetails(zipcode: string): void {
    this.weatherMaps = this.weatherMaps.filter((element: WeatherMap) => element.key != zipcode);
    this.weatherStorageService.updateWeatherMaps(this.weatherMaps);
  }
}
