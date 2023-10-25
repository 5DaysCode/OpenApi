import { TestBed, ComponentFixture } from '@angular/core/testing';
import { InfoBarComponent } from './info-bar.component';

describe('InfoBannerComponent', () => {
  let component: InfoBarComponent;
  let fixture: ComponentFixture<InfoBarComponent>;
  let element: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InfoBarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InfoBarComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create the info-banner component', () => {
    expect(component).toBeTruthy();
  });

  it('should display the correct information text', () => {
    const bannerText = element.textContent;
    expect(bannerText).toContain(
      "🌞 To utilize this demo, you'll need an OpenWeather API key."
    );
  });

  it('should have a link to OpenWeather sign up', () => {
    const anchor = element.querySelector('a');
    expect(anchor).toBeTruthy();
    expect(anchor.href).toBe('https://home.openweathermap.org/users/sign_up');
    expect(anchor.target).toBe('_blank');
    expect(anchor.textContent).toContain('Grab yours for free!');
  });
});
