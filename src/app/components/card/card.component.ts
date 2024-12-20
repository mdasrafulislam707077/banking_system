import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() isGold:boolean ;
  @Input() isSilver:boolean ;
  @Input() isPlati:boolean ;
  constructor(){
    this.isGold = false
    this.isSilver = false
    this.isPlati = false
  }

}
