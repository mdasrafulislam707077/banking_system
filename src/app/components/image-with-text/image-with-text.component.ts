import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-with-text',
  templateUrl: './image-with-text.component.html',
  styleUrls: ['./image-with-text.component.scss']
})
export class ImageWithTextComponent {
  @Input() header:string;
  @Input() des:string
  @Input() buttonlabel:string
  @Input() buttonlink:string
  @Input() src:string
  constructor(){
    this.src = '../../../assets/image/close-up-mobile-phones.jpg'
    this.buttonlabel = 'Get More Info'
    this.buttonlink = ''
    this.header = 'Welcome to Q-Bank'
    this.des = `At Q-Bank, we are proud to serve our clients with unparalleled dedication
      and commitment. We have achieved remarkable milestones: 1 billion
      satisfied clients with our client-first approach, $99 million in total
      loans provided to support dreams and foster growth, and a 99.99% success
      rate, a testament to our efficiency and trustworthiness in the banking
      sector. Our innovative financial solutions and customer-centric services
      set us apart in the industry. We are dedicated to continuous improvement
      and innovation, ensuring that we not only meet but exceed our clients'
      expectations. Join us at Q-Bank and experience banking redefined, where
      your financial well-being is our top priority.`
  }

}
