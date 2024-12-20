import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceCard001Component } from './service-card001.component';

describe('ServiceCard001Component', () => {
  let component: ServiceCard001Component;
  let fixture: ComponentFixture<ServiceCard001Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceCard001Component]
    });
    fixture = TestBed.createComponent(ServiceCard001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
