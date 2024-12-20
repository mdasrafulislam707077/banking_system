import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-service-card001',
  templateUrl: './service-card001.component.html',
  styleUrls: ['./service-card001.component.scss']
})
export class ServiceCard001Component {
  @Input() src:string
  @Input() header:string
  @Input() des:string
  constructor(){
    this.src = '../../../assets/icon/service/noun-savings-account-1646596.svg'
    this.header = 'Personal Savings Accounts'
    this.des = 'Experience the peace of mind that comes with our Personal Savings Accounts, where your hard-earned money grows securely. Enjoy not just savings, but a financial partner dedicated to helping you achieve your goals. With competitive interest rates and flexible terms, our accounts are designed to adapt to your changing needs, ensuring your financial future is in good hands.'
  }
}
