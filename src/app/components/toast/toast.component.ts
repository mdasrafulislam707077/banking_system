import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
})
export class TOASTComponent {
  position: string;
  @Input() duration: number;
  @Output() onClose: EventEmitter<void>;
  @Input() showtoast: boolean;
  transition: string;
  constructor() {
    this.transition = 'none';
    this.position = 'r-t';
    this.duration = 2000;
    this.onClose = new EventEmitter<void>();
    this.showtoast = false;
  }

  closeToast() {
    this.transition = 'scaleY';
    setTimeout(() => {
      this.transition = 'None';
      setTimeout(() => {
        this.onClose.emit();
      }, 300);
    }, 200);
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes['showtoast']) {
      const currentValue = changes['showtoast'].currentValue;
      const previousValue = changes['showtoast'].previousValue;
      this.handlePositionChange(currentValue, previousValue);
    }
  }
  handlePositionChange(currentValue: string, previousValue: string) {
    if (currentValue) {
      setTimeout(() => {
        this.transition = 'scaleY';
        setTimeout(() => {
          this.transition = 'scaleX';
          setTimeout(() => {
            this.transition = 'scaleY';
            setTimeout(() => {
              this.transition = 'None';
              setTimeout(() => {
                this.onClose.emit();
              }, 200);
            }, 200);
          }, this.duration);
        }, 200);
      }, 50);
    }
  }
}
