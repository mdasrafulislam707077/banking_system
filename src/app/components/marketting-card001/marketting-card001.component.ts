import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-marketting-card001',
  templateUrl: './marketting-card001.component.html',
  styleUrls: ['./marketting-card001.component.scss'],
})
export class MarkettingCard001Component implements AfterViewInit {
  @Input() items: any[];
  itemlength: number;
  beforeItems: any[];
  afterItems: any[];
  currentIndex: number;
  displayIndex: number;
  transition: boolean;
  @ViewChild('slider') slider!: ElementRef;
  divHeight: number | undefined;
  push: boolean;
  totalHeight: number;
  totalContainerCard: number;
  ngAfterViewInit() {
    this.totalHeight = this.slider.nativeElement.offsetHeight - 20;
  }
  constructor() {
    this.totalContainerCard = 0;
    this.totalHeight = 0;
    this.items = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
    this.transition = true;
    this.itemlength = this.items.length;
    this.push = true;
    this.currentIndex = 0;
    this.displayIndex = 0;
    if (this.items.length % 2 == 0) {
      this.afterItems = this.items.slice(this.items.length - 3).reverse();
      this.displayIndex = this.itemlength / 2;
    } else {
      this.afterItems = this.items.slice(this.items.length - 2).reverse();
      this.displayIndex = Math.ceil(this.itemlength / 2) - 1;
    }

    this.beforeItems = this.items.slice(0, 2);
    this.totalContainerCard =
      this.afterItems.length + this.items.length + this.beforeItems.length;
  }
  stapUP() {
    if (this.push) {
      this.currentIndex += 1;
      this.displayIndex -= 1;
      this.push = false;
      

      setTimeout(() => {
        this.transition = true;

        if (this.displayIndex == -1) {
          if (this.items.length % 2 == 0) {
            this.transition = false;
            const targetIndex = -(this.itemlength / 2 - 1);
            this.currentIndex = targetIndex;
            this.displayIndex = this.itemlength -1;
            setTimeout(() => {
              this.transition = true;
              this.push = true;
            }, 250);
          } else {
            this.transition = false;
            const targetIndex = -Math.ceil(this.itemlength / 2) + 1;
            this.currentIndex = targetIndex;
            this.displayIndex = this.itemlength - 1;
            setTimeout(() => {
              this.transition = true;
              this.push = true;
            }, 250);
          }
        } else {
          this.push = true;
        }
      }, 200);
    }
  }
  stapDown() {
    if (this.push) {
      this.currentIndex -= 1;
      this.displayIndex += 1;
      this.push = false;
      setTimeout(() => {
       
       
        if (this.displayIndex == this.itemlength ){
          this.transition = false;
           this.push = false;
           if (this.items.length % 2 == 0) {
            this.displayIndex = 0;
            const targetIndex = (this.itemlength / 2 );
            this.currentIndex = targetIndex;
            setTimeout(() => {
              this.transition = true;
              this.push = true;
            }, 250);
           } else {
            const targetIndex = Math.ceil(this.itemlength / 2) - 1;
            this.currentIndex = targetIndex;
            this.displayIndex = 0;
            setTimeout(() => {
              this.transition = true;
              this.push = true;
            }, 250);
           }

        }else{
          this.push = true;

        }






      }, 200);
    }
  }
}
