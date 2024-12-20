import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-invalid-message',
  templateUrl: './invalid-message.component.html',
  styleUrls: ['./invalid-message.component.scss'],
})
export class InvalidMessageComponent {
  @Input() header: string;
  @Input() message: string;
  @Input() buttonName: string;
  @Input() buttonLink: string;
  @Output() onClose: EventEmitter<void>;
  constructor() {
    this.header = 'header';
    this.message = 'Apply message';
    this.buttonName = 'Settings';
    this.buttonLink = '';
    this.onClose = new EventEmitter<void>();
  }
  closePopup() {
    this.onClose.emit();
  }
}
