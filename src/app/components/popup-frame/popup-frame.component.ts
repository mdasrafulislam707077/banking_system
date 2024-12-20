import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-popup-frame',
  templateUrl: './popup-frame.component.html',
  styleUrls: ['./popup-frame.component.scss'],
})
export class PopupFrameComponent {
  @Input() showPopup: boolean;

  constructor() {
    this.showPopup = false;
  }
}
