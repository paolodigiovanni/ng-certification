import { City } from "./city.model";
import { ForecastDaily } from "./forecast-daily.model";

export class ForecastResponse {
    cod: string;
    message: number;
    cnt: number;
    list: ForecastDaily[];
    city: City;
}
