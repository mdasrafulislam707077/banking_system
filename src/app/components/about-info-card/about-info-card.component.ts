import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-about-info-card',
  templateUrl: './about-info-card.component.html',
  styleUrls: ['./about-info-card.component.scss']
})
export class AboutInfoCardComponent {
  @Input() src!:string;
  @Input() header!:string;
  @Input() des!:string;
  constructor(){
    this.src = './../../../assets/icon/about/customer-service-icon.svg'
    this.header=  'Comprehensive Financial Services'
    this.des = 'Offering a wide range of financial services including savings accounts, loans, investment opportunities, and insurance to meet all customer needs.'
  }
}
