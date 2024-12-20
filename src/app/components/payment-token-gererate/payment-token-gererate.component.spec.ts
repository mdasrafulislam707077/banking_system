import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentTokenGererateComponent } from './payment-token-gererate.component';

describe('PaymentTokenGererateComponent', () => {
  let component: PaymentTokenGererateComponent;
  let fixture: ComponentFixture<PaymentTokenGererateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentTokenGererateComponent]
    });
    fixture = TestBed.createComponent(PaymentTokenGererateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
