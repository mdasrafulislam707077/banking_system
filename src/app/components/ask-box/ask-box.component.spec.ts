import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AskBoxComponent } from './ask-box.component';

describe('AskBoxComponent', () => {
  let component: AskBoxComponent;
  let fixture: ComponentFixture<AskBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AskBoxComponent]
    });
    fixture = TestBed.createComponent(AskBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
