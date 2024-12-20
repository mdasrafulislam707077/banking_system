import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TransectionService } from 'src/app/transection.service';
@Component({
  selector: 'app-autopay-genarator-card',
  templateUrl: './autopay-genarator-card.component.html',
  styleUrls: ['./autopay-genarator-card.component.scss'],
})
export class AutopayGenaratorCardComponent {
  form: FormGroup;


  @Input() amount!: number | null;
  @Input() address!: string | null;
  @Input() order!: number | null;
  @Input() name!: string | null;
  @Output() onClose:EventEmitter<void>
  @Output() createdata:EventEmitter<any>
  errorMessage: string;
  constructor(private formbuilder: FormBuilder,private tranS:TransectionService) {
    this.onClose = new EventEmitter<void>()
    this.createdata = new EventEmitter<any>()
    this.amount = null;
    this.address = null;
    this.order = null;
    this.errorMessage = '';
    this.name = '';
  
   
    this.form = formbuilder.group({
      amount: ['', Validators.required],
      lvl_order: ['', Validators.required],
      token: ['', Validators.required],
      name: ['', Validators.required],
    });
  }

  generate() {
    this.form.patchValue({
      amount: this.amount,
      lvl_order:this.order,
      token:this.address,
      name:this.name
    });

    if (this.form.valid) {
      this.errorMessage = '';
      this.tranS.createAutopayToken(this.form.value,(data:any,err:any)=>{
        if (data) {
          this.createdata.emit(data)
        }
          })

    } else {
      this.errorMessage = 'invalid value';
    }
  }
  closePopup() {
    this.onClose.emit()
  }
}
