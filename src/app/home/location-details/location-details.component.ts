import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Configs } from '../../constants/configs.model';
import { Endpoints } from '../../constants/endpoints.model';
import { WeatherMap } from '../../shared/models/weather-map.model';

@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.component.html',
  styleUrls: ['./location-details.component.css']
})
export class LocationDetailsComponent implements OnInit {

  @Input() details: WeatherMap;
  @Output() onClose: EventEmitter<string> = new EventEmitter<string>();

  imgUrl: string = Endpoints.IMG_URL;
  imgExt: string = Configs.IMG_EXT;
  count: number = Configs.DAILY_COUNT;

  constructor() { }

  ngOnInit(): void {
  }

  closeDetails(): void {
    this.onClose.emit(this.details?.key);
  }
}
