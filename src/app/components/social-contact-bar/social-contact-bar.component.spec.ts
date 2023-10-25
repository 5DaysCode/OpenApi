import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SocialContactBarComponent } from './social-contact-bar.component';

describe('SocialContactBarComponent', () => {
  let component: SocialContactBarComponent;
  let fixture: ComponentFixture<SocialContactBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SocialContactBarComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialContactBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have at least one social icon', () => {
    const compiled = fixture.nativeElement;
    const socialIcons = compiled.querySelectorAll('.social-icons i');
    expect(socialIcons.length).toBeGreaterThan(0);
  });

  it('should have at least one contact icon', () => {
    const compiled = fixture.nativeElement;
    const contactIcons = compiled.querySelectorAll('.contact-icons i');
    expect(contactIcons.length).toBeGreaterThan(0);
  });

  it('should display the phone number correctly', () => {
    const compiled = fixture.nativeElement;
    const phoneNumber = compiled.querySelector(
      '.contact-icons i.fas.fa-phone + span'
    );
    expect(phoneNumber.textContent.trim()).toEqual('45-645-6456-44');
  });

  it('should display the email correctly', () => {
    const compiled = fixture.nativeElement;
    const email = compiled.querySelector(
      '.contact-icons i.fas.fa-envelope + span'
    );
    expect(email.textContent.trim()).toEqual('xxxxzz@skolverket.se');
  });
});
