import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankCardBox001Component } from './bank-card-box001.component';

describe('BankCardBox001Component', () => {
  let component: BankCardBox001Component;
  let fixture: ComponentFixture<BankCardBox001Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BankCardBox001Component]
    });
    fixture = TestBed.createComponent(BankCardBox001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
