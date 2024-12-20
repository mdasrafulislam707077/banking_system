import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsercreateCardComponent } from './usercreate-card.component';

describe('UsercreateCardComponent', () => {
  let component: UsercreateCardComponent;
  let fixture: ComponentFixture<UsercreateCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsercreateCardComponent]
    });
    fixture = TestBed.createComponent(UsercreateCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
