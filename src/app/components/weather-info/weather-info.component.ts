import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-weather-info',
  templateUrl: './weather-info.component.html',
  styleUrls: ['./weather-info.component.scss'],
})
export class WeatherInfoComponent implements OnInit {
  inputVal: string = '';
  cities: any[] = [];
  msg: string = '';
  errorMsg: string = '';

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {}

  onSubmit() {
    const existingCity = this.cities.find(
      (city) => city.name.toLowerCase() === this.inputVal.toLowerCase()
    );

    if (existingCity) {
      this.msg = `You should allready know what kind of weather is  for ${existingCity.name} ...otherwise be more specific by providing a right name`;
      this.inputVal = '';
      return;
    }

    // Use service
    this.weatherService.getWeather(this.inputVal).subscribe(
      (data: any) => {
        const { main, name, sys, weather } = data;
        const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0]['icon']}.svg`;

        const city = {
          name: name,
          country: sys.country,
          temp: Math.round(main.temp),
          description: weather[0]['description'],
          icon: icon,
        };

        this.cities.push(city);
        this.inputVal = '';
      },
      (error) => {
        this.msg = 'Try to write the name for real existing city ';
      }
    );

    this.msg = '';
  }
}
