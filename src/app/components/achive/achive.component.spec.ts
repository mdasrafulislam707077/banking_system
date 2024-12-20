import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AchiveComponent } from './achive.component';

describe('AchiveComponent', () => {
  let component: AchiveComponent;
  let fixture: ComponentFixture<AchiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AchiveComponent]
    });
    fixture = TestBed.createComponent(AchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
