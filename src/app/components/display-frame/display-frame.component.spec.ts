import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayFrameComponent } from './display-frame.component';

describe('DisplayFrameComponent', () => {
  let component: DisplayFrameComponent;
  let fixture: ComponentFixture<DisplayFrameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayFrameComponent]
    });
    fixture = TestBed.createComponent(DisplayFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
