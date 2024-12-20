import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupFrameComponent } from './popup-frame.component';

describe('PopupFrameComponent', () => {
  let component: PopupFrameComponent;
  let fixture: ComponentFixture<PopupFrameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopupFrameComponent]
    });
    fixture = TestBed.createComponent(PopupFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
