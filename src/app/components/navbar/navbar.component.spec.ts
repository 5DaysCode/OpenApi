import { TestBed, ComponentFixture } from '@angular/core/testing';
import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let element: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create the navbar component', () => {
    expect(component).toBeTruthy();
  });

  it('should display the correct logo text', () => {
    const logoText = element.querySelector('.logo').textContent.trim();
    expect(logoText).toContain('SkolverketsOpenWeatherAPI');
    expect(logoText).toContain('free, inteligent & easy');
  });

  it('should have a link to Home', () => {
    const homeLink = element.querySelector('a[href="#home"]');
    expect(homeLink).toBeTruthy();
    expect(homeLink.textContent).toBe('Home');
  });

  it('should have a link to About', () => {
    const aboutLink = element.querySelector('a[href="#about"]');
    expect(aboutLink).toBeTruthy();
    expect(aboutLink.textContent).toBe('About');
  });
});
