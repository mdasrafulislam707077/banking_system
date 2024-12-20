import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-qus-card',
  templateUrl: './qus-card.component.html',
  styleUrls: ['./qus-card.component.scss']
})
export class QusCardComponent {
  @Input() header: string;
  @Input() message: string;
  @Output() onClose: EventEmitter<void>;
  @Output() onYes: EventEmitter<void>;
  @Output() onNo: EventEmitter<void>;
  constructor() {
    this.header = 'header';
    this.message = 'apply message';
    this.onClose = new EventEmitter<void>();
    this.onYes = new EventEmitter<void>();
    this.onNo = new EventEmitter<void>();
  }
  positiveClick(): void {
    this.onYes.emit();
  }
  nagativeClick(): void {
    this.onNo.emit();
  }
  closePopup(): void {
    this.onClose.emit();
  }
}
