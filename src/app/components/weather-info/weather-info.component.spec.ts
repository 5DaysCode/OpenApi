import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeatherInfoComponent } from './weather-info.component';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { WeatherService } from '../../services/weather.service';
import { of } from 'rxjs';

describe('WeatherComponent', () => {
  let component: WeatherInfoComponent;
  let fixture: ComponentFixture<WeatherInfoComponent>;
  let weatherService: WeatherService;

  const weatherServiceStub = {
    getWeather: jest.fn().mockReturnValue(of({})),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeatherInfoComponent],
      imports: [FormsModule, HttpClientTestingModule],
      providers: [{ provide: WeatherService, useValue: weatherServiceStub }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherInfoComponent);
    component = fixture.componentInstance;
    weatherService = TestBed.inject(WeatherService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display title', () => {
    const compiled = fixture.nativeElement;
    const title = compiled.querySelector('.title');
    expect(title.textContent).toContain('Get weather by your city of choice');
  });

  it('should bind input value with component inputVal property', () => {
    const input = fixture.nativeElement.querySelector('input');
    input.value = 'Test City';
    input.dispatchEvent(new Event('input'));
    expect(component.inputVal).toBe('Test City');
  });

  it('should list cities', () => {
    component.cities = [
      {
        name: 'City1',
        country: 'Country1',
        temp: 25,
        description: 'sunny',
      },
      {
        name: 'City2',
        country: 'Country2',
        temp: 20,
        description: 'cloudy',
      },
    ];
    fixture.detectChanges();
    const cityElements = fixture.nativeElement.querySelectorAll('.location');
    expect(cityElements.length).toBe(2);
    expect(cityElements[0].textContent).toContain(
      'City1, Country1 - 25°C, sunny'
    );
    expect(cityElements[1].textContent).toContain(
      'City2, Country2 - 20°C, cloudy'
    );
  });

  it('should call getWeather on service when onSubmit is called', () => {
    component.onSubmit();
    expect(weatherService.getWeather).toHaveBeenCalled();
  });
});
