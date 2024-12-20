import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-auto-pay-token-display',
  templateUrl: './auto-pay-token-display.component.html',
  styleUrls: ['./auto-pay-token-display.component.scss'],
})
export class AutoPayTokenDisplayComponent {
  @Input() token: string;
  @Input() name: string;
  @Input() amount: string;
  @Input() order: string;
  @Output() onClose:EventEmitter<void>
  constructor() {
    this.onClose = new EventEmitter<void>()
    this.amount = 'unset';
    this.name = 'unset';
    this.order = 'unset';
    this.token = 'unset';
  }
  closeCard(){
    this.onClose.emit()
  }
}
