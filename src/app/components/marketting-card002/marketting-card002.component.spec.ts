import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkettingCard002Component } from './marketting-card002.component';

describe('MarkettingCard002Component', () => {
  let component: MarkettingCard002Component;
  let fixture: ComponentFixture<MarkettingCard002Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MarkettingCard002Component]
    });
    fixture = TestBed.createComponent(MarkettingCard002Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
