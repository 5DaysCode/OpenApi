import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

  getWeather(cityName: string) {
    const url = `${this.apiUrl}?q=${cityName}&appid=${environment.apiKey}&units=metric`;
    return this.http.get(url);
  }
}
