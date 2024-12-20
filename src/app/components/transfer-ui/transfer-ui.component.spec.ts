import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferUiComponent } from './transfer-ui.component';

describe('TransferUiComponent', () => {
  let component: TransferUiComponent;
  let fixture: ComponentFixture<TransferUiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransferUiComponent]
    });
    fixture = TestBed.createComponent(TransferUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
