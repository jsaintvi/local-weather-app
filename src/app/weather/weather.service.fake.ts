import {Observable, of} from 'rxjs';
import {IWeatherService} from './weather.service';
import {ICurrentWeather} from '../icurrent-weather';

export class WeatherServiceFake implements IWeatherService{
    private fakeWeatherData: ICurrentWeather  = {
        city: 'Cuyahoga Falls',
        country: 'US',
        date: new Date(),
        image: '',
        temperature: 72,
        description: 'sunny'
    }
    getCurrentWeather(city:string, country:string): Observable<ICurrentWeather>{
            return of(this.fakeWeatherData)
    }
}