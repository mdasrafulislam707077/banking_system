import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AccountInfo } from 'src/app/data/ngrx/accountInfo/accountinfo.state';
import { TransectionService } from 'src/app/transection.service';

@Component({
  selector: 'app-transfer-ui',
  templateUrl: './transfer-ui.component.html',
  styleUrls: ['./transfer-ui.component.scss'],
})
export class TransferUiComponent {
  balAmount: number | undefined;
  amount: number;
  address: string;
  pin: string;
  pass: string;
  form: FormGroup;
  commonError!: string;
  errorItems!: any;
  message: string;
  showtoast:boolean

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<{ accountinfo: AccountInfo }>,
    private transS: TransectionService
  ) {
    this.message = ''
    this.showtoast = false
    this.form = formBuilder.group({
      amount: [' ', Validators.required],
      address: [' ', Validators.required],
      pin: [' ', Validators.required],
      password: [' ', Validators.required],
    });
    this.errorItems = {};
    this.balAmount = 0;
    this.address = '';
    this.pass = '';
    this.pin = '';
    this.amount = 0;
    this.store.select('accountinfo').subscribe((data) => {
      if (data.amount) {
        this.balAmount = data.amount;
      }
    });
  }

  onSubmit() {
    this.form.patchValue({
      amount: (this.amount==0 || !this.amount)?null:this.amount,
      address: this.address,
      pin: this.pin,
      password: this.pass,
    });
    if (this.form.valid) {
      this.commonError = '';
      this.transS.transfar(this.form.value, (data: any, err: any) => {

        if (!err) {
          this.balAmount = data.new_bal
          const bal = this.amount
          this.showtoast  = true
          this.message = `${bal}$ transferred`
          this.errorItems = {};
          this.amount = 0;
          this.pin = '';
          this.pass = '';
          this.address = '';
        } else {
          if (err.status == 400) {
            this.errorItems = err.error;
          }
        }
      });
    } else {
      this.commonError = 'invalid form';
    }
  }
  autoCloseToast(){
    this.showtoast = false
  }
}
