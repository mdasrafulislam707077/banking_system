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
  @Input() card_number?:string;
  @Input() card_cvv?:string;
  @Input() card_type?:string;
  @Input() card_exp?:string;
  @Input() username?:string;
  constructor(){
    this.isGold = false
    this.isSilver = false
    this.isPlati = false
  }

}
