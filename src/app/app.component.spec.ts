import { TestBed, waitForAsync } from '@angular/core/testing';
import { Component } from '@angular/core';
import { AppComponent } from './app.component';

// Mock child components
@Component({
  selector: 'app-top-bar',
  template: '',
})
class MockTopBarComponent {}

@Component({
  selector: 'app-social-contact-bar',
  template: '',
})
class MockSocialContactBarComponent {}

@Component({
  selector: 'app-navbar',
  template: '',
})
class MockNavbarComponent {}

@Component({
  selector: 'app-info-bar',
  template: '',
})
class MockInfoBarComponent {}

@Component({
  selector: 'app-weather-info',
  template: '',
})
class MockWeatherInfoComponent {}

describe('AppComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MockTopBarComponent,
        MockSocialContactBarComponent,
        MockNavbarComponent,
        MockInfoBarComponent,
        MockWeatherInfoComponent,
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
