import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TopBarComponent } from './top-bar.component';

describe('TopBarComponent', () => {
  let component: TopBarComponent;
  let fixture: ComponentFixture<TopBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopBarComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the logo text', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.logo').textContent).toContain(
      'Skolverkets OpenWeatherAPI'
    );
  });

  it('should display the author text', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.author').textContent).toContain(
      'by 5DaysCode'
    );
  });

  it('should have the fa-minus and fa-plus icons', () => {
    const compiled = fixture.nativeElement;
    const minusIcon = compiled.querySelector('.icons .fas.fa-minus');
    const plusIcon = compiled.querySelector('.icons .fas.fa-plus');
    expect(minusIcon).toBeTruthy();
    expect(plusIcon).toBeTruthy();
  });
});
