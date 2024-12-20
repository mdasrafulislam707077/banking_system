import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransectionInfoDisplayComponent } from './transection-info-display.component';

describe('TransectionInfoDisplayComponent', () => {
  let component: TransectionInfoDisplayComponent;
  let fixture: ComponentFixture<TransectionInfoDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransectionInfoDisplayComponent]
    });
    fixture = TestBed.createComponent(TransectionInfoDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
