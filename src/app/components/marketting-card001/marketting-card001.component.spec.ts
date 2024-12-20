import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkettingCard001Component } from './marketting-card001.component';

describe('MarkettingCard001Component', () => {
  let component: MarkettingCard001Component;
  let fixture: ComponentFixture<MarkettingCard001Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MarkettingCard001Component]
    });
    fixture = TestBed.createComponent(MarkettingCard001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
