import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-toast-simple-message',
  templateUrl: './toast-simple-message.component.html',
  styleUrls: ['./toast-simple-message.component.scss'],
})
export class TOASTSimpleMessageComponent {
  @Input() toastType: string;
  @Input() message: string;
  @Input() messageHeader: string;
  constructor() {
    this.toastType = 'success';
    this.message = 'succeefully worked!!';
    this.messageHeader = 'Success';
  }
}
