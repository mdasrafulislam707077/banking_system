import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QusCardComponent } from './qus-card.component';

describe('QusCardComponent', () => {
  let component: QusCardComponent;
  let fixture: ComponentFixture<QusCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QusCardComponent]
    });
    fixture = TestBed.createComponent(QusCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
