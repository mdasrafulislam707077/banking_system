import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoPayTokenDisplayComponent } from './auto-pay-token-display.component';

describe('AutoPayTokenDisplayComponent', () => {
  let component: AutoPayTokenDisplayComponent;
  let fixture: ComponentFixture<AutoPayTokenDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutoPayTokenDisplayComponent]
    });
    fixture = TestBed.createComponent(AutoPayTokenDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
