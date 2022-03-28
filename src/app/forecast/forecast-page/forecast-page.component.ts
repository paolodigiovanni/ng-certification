import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Configs } from '../../constants/configs.model';
import { Endpoints } from '../../constants/endpoints.model';
import { WeatherApiService } from '../../core/services/weather-api.service';
import { ForecastResponse } from '../../shared/models/forecast-response.model';

@Component({
  selector: 'app-forecast-page',
  templateUrl: './forecast-page.component.html',
  styleUrls: ['./forecast-page.component.css']
})
export class ForecastPageComponent implements OnInit {

  forecastResponse: ForecastResponse;

  imgUrl: string = Endpoints.IMG_URL;
  imgExt: string = Configs.IMG_EXT;
  count: number = Configs.DAILY_COUNT;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private weatherApiService: WeatherApiService
  ) { }

  ngOnInit(): void {
    const zipcode = this.activatedRoute.snapshot.params.zipcode;
    if (zipcode) {
      this.weatherApiService.getForecastDailyWeather(zipcode, this.count).subscribe(
        (data: ForecastResponse) => {
          this.forecastResponse = data;
        },
        (error: HttpErrorResponse) => {
          alert(error?.error?.message);
        }
      )
    } else {
      alert("You must insert a zipcode at the end of the browser url, in order to retrieve forecast daily weather (ex. forecast/10001)");
    }
  }

  backToMainPage(): void {
    this.router.navigate(['homepage']);
  }

}
