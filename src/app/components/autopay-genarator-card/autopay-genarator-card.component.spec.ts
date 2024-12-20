import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutopayGenaratorCardComponent } from './autopay-genarator-card.component';

describe('AutopayGenaratorCardComponent', () => {
  let component: AutopayGenaratorCardComponent;
  let fixture: ComponentFixture<AutopayGenaratorCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutopayGenaratorCardComponent]
    });
    fixture = TestBed.createComponent(AutopayGenaratorCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
