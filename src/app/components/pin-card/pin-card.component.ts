import { Component, EventEmitter, Output } from '@angular/core';
import { TransectionService } from 'src/app/transection.service';
@Component({
  selector: 'app-pin-card',
  templateUrl: './pin-card.component.html',
  styleUrls: ['./pin-card.component.scss'],
})
export class PinCardComponent {
  pin: string;
  errorMessage: string;
  @Output() onClose: EventEmitter<void>;
  @Output() submitForm: EventEmitter<string>;
  constructor(private tranS: TransectionService) {
    this.pin = '';
    this.errorMessage = '';
    this.onClose = new EventEmitter<void>();
    this.submitForm = new EventEmitter<string>();
  }

  submit(): void {
    this.tranS.checkPin(this.pin, (err: any) => {
      if (err) {
        this.errorMessage = 'invalid pin';
      } else {
        this.errorMessage = '';
        this.submitForm.emit();
      }
    });
  }
  closePopup(): void {
    this.onClose.emit();
  }
}
