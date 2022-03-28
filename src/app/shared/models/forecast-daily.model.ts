import { FeelsLike } from "./feels-like.model";
import { Temp } from "./temp.model";
import { Weather } from "./weather.model";

export class ForecastDaily {
    dt: number;
    sunrise: number;
    sunset: number;
    temp: Temp;
    feels_like: FeelsLike;
    pressure: number;
    humidity: number;
    weather: Weather[];
}
