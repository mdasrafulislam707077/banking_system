import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutopayGenaratorCardEditComponent } from './autopay-genarator-card-edit.component';

describe('AutopayGenaratorCardEditComponent', () => {
  let component: AutopayGenaratorCardEditComponent;
  let fixture: ComponentFixture<AutopayGenaratorCardEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutopayGenaratorCardEditComponent]
    });
    fixture = TestBed.createComponent(AutopayGenaratorCardEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
