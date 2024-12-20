import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageWithTextComponent } from './image-with-text.component';

describe('ImageWithTextComponent', () => {
  let component: ImageWithTextComponent;
  let fixture: ComponentFixture<ImageWithTextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImageWithTextComponent]
    });
    fixture = TestBed.createComponent(ImageWithTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
