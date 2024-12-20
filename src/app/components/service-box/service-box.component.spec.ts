import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceBoxComponent } from './service-box.component';

describe('ServiceBoxComponent', () => {
  let component: ServiceBoxComponent;
  let fixture: ComponentFixture<ServiceBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceBoxComponent]
    });
    fixture = TestBed.createComponent(ServiceBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
