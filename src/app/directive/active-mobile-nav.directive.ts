import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  Renderer2,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[appActiveMobileNav]',
})
export class ActiveMobileNavDirective implements OnChanges {
  @Input() active: boolean;
  constructor(private element: ElementRef, private renderer: Renderer2) {
    this.active = false;
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['active']) {
      if (this.active) {
        this.renderer.setStyle(
          this.element.nativeElement,
          'transform',
          'translateX(0px)'
        );
      } else {
        this.renderer.setStyle(
          this.element.nativeElement,
          'transform',
          'translateX(-300px)'
        );
      }
    }
  }
}
