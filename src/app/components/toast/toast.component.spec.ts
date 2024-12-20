import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TOASTComponent } from './toast.component';

describe('TOASTComponent', () => {
  let component: TOASTComponent;
  let fixture: ComponentFixture<TOASTComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TOASTComponent]
    });
    fixture = TestBed.createComponent(TOASTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
