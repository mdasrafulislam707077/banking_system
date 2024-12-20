import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TransectionService } from 'src/app/transection.service';
@Component({
  selector: 'app-autopay-genarator-card-edit',
  templateUrl: './autopay-genarator-card-edit.component.html',
  styleUrls: ['./autopay-genarator-card-edit.component.scss'],
})
export class AutopayGenaratorCardEditComponent {
  @Input() order!: number | null | string;
  @Input() amount!: number | null;
  @Input() id!: number | null;
  @Output() onUpdate:EventEmitter<any>
  errorMessage: string;
  constructor(private formbuilder: FormBuilder,private tranS:TransectionService) {
    this.amount = null;
    this.errorMessage = '';
    this.onUpdate = new EventEmitter<any>()
  }

  generate() {
    
    if (((this.amount || this.order) || (this.amount==0 || this.order==0)) && this.id) {
      
      const form:any = {}
      if (this.amount) {
        form["amount"] = this.amount
      }
      if (this.order) {
        form["lvl_order"] = this.order
        
      }
      
      this.errorMessage = '';
      this.tranS.updateAutoPayToken(this.id,form,(data:any,err:any)=>{
        if (data) {
            this.onUpdate.emit(data)
        }
      })
    } else {
      this.errorMessage = 'invalid value';
    }
  }
  closePopup() {}
}
