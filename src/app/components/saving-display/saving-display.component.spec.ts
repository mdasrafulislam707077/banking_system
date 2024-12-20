import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingDisplayComponent } from './saving-display.component';

describe('SavingDisplayComponent', () => {
  let component: SavingDisplayComponent;
  let fixture: ComponentFixture<SavingDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SavingDisplayComponent]
    });
    fixture = TestBed.createComponent(SavingDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
