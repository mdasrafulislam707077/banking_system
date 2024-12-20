import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMoreInfoComponent } from './about-more-info.component';

describe('AboutMoreInfoComponent', () => {
  let component: AboutMoreInfoComponent;
  let fixture: ComponentFixture<AboutMoreInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutMoreInfoComponent]
    });
    fixture = TestBed.createComponent(AboutMoreInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
