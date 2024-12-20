import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutInfoCardComponent } from './about-info-card.component';

describe('AboutInfoCardComponent', () => {
  let component: AboutInfoCardComponent;
  let fixture: ComponentFixture<AboutInfoCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutInfoCardComponent]
    });
    fixture = TestBed.createComponent(AboutInfoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
