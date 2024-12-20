import { Component, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-close-button',
  templateUrl: './close-button.component.html',
  styleUrls: ['./close-button.component.scss']
})
export class CloseButtonComponent {
  @Output() onClose:EventEmitter<void>
  constructor(){
    this.onClose= new EventEmitter<void>()
  }
  onClosePopup(){
    this.onClose.emit()
  }
}
