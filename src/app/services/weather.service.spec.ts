import { TestBed } from '@angular/core/testing';
import { WeatherService } from './weather.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

describe('WeatherService', () => {
  let service: WeatherService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [WeatherService], // Use the actual WeatherService
    });

    service = TestBed.inject(WeatherService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve weather data', () => {
    const mockWeatherData = { temperature: 25, condition: 'Sunny' };

    service.getWeather('CityName').subscribe((data) => {
      expect(data.temperature).toBe(25);
      expect(data.condition).toBe('Sunny');
    });

    const expectedUrl = `https://api.openweathermap.org/data/2.5/weather?q=CityName&appid=${environment.apiKey}&units=metric`;
    const request = httpMock.expectOne(expectedUrl);
    expect(request.request.method).toBe('GET');
    request.flush(mockWeatherData);
  });
});
