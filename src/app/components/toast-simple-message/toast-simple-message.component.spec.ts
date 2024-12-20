import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TOASTSimpleMessageComponent } from './toast-simple-message.component';

describe('TOASTSimpleMessageComponent', () => {
  let component: TOASTSimpleMessageComponent;
  let fixture: ComponentFixture<TOASTSimpleMessageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TOASTSimpleMessageComponent]
    });
    fixture = TestBed.createComponent(TOASTSimpleMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
