import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransectionBoxComponent } from './transection-box.component';

describe('TransectionBoxComponent', () => {
  let component: TransectionBoxComponent;
  let fixture: ComponentFixture<TransectionBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransectionBoxComponent]
    });
    fixture = TestBed.createComponent(TransectionBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
