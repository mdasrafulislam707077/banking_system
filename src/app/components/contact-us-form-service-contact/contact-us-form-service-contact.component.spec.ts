import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUsFormServiceContactComponent } from './contact-us-form-service-contact.component';

describe('ContactUsFormServiceContactComponent', () => {
  let component: ContactUsFormServiceContactComponent;
  let fixture: ComponentFixture<ContactUsFormServiceContactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactUsFormServiceContactComponent]
    });
    fixture = TestBed.createComponent(ContactUsFormServiceContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
