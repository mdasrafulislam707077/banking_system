import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/auth.service';
import { UserInfo } from 'src/app/data/ngrx/userinfo/userinfo.state';
@Component({
  selector: 'app-payment-token-gererate',
  templateUrl: './payment-token-gererate.component.html',
  styleUrls: ['./payment-token-gererate.component.scss'],
})
export class PaymentTokenGererateComponent implements OnInit {
  form: FormGroup;
  updateForm: FormGroup;
  selectItems: any[];
  @Input() updateRole: boolean;
  @Input() id!: number;
  @Input() selectoption!: number | null | string;
  @Input() amount!: number;
  @Input() token!: string | null;
  @Output() getToken: EventEmitter<Object>;
  @Output() onClose: EventEmitter<Object>;
  @Output() updateValue!: EventEmitter<Object>;
  useremail: string;
  errorMessage: string;
  constructor(
    private formbuilder: FormBuilder,
    private http: HttpClient,
    private routes: Router,
    private store: Store<{ userinfo: UserInfo }>,
    private authS: AuthService
  ) {
    this.updateRole = false;
    this.amount = 0;
    this.errorMessage = '';
    this.selectoption = null;
    this.useremail = '';
    this.selectItems = [
      ['1 minute', 60000],
      ['2 minutes', 120000],
      ['3 minutes', 180000],
      ['4 minutes', 240000],
      ['5 minutes', 300000],
      ['10 minutes', 600000],
      ['20 minutes', 1200000],
      ['25 minutes', 1500000],
      ['35 minutes', 2100000],
      ['45 minutes', 2700000],
      ['1 hour', 3600000],
      ['2 hours', 7200000],
      ['3 hours', 10800000],
      ['4 hours', 14400000],
      ['5 hours', 18000000],
      ['10 hours', 36000000],
      ['12 hours', 43200000],
      ['1 day', 86400000],
      ['2 days', 172800000],
      ['3 days', 259200000],
      ['4 days', 345600000],
      ['5 days', 432000000],
      ['7 days', 604800000],
      ['12 days', 1036800000],
      ['15 days', 1296000000],
      ['20 days', 1728000000],
      ['1 month', 2592000000],
    ];
    this.getToken = new EventEmitter<Object>();
    this.onClose = new EventEmitter<Object>();
    this.updateValue = new EventEmitter<any>();
    this.form = formbuilder.group({
      limite: ['', Validators.required],
      exp_date: ['', Validators.required],
      token: ['', Validators.required],
    });
    this.updateForm = formbuilder.group({
      limite: [''],
      exp_date: [''],
    });
  }

  ngOnInit(): void {
    this.store.select('userinfo').subscribe((data) => {
      this.useremail = data.email;
    });
    this.authS.checkAuth((err: any) => {
      if (err) {
      }
    });
  }
  generate() {
    if (this.updateRole) {
      const accessToken = localStorage.getItem('auth_access');
      const form: any = {};
      if (this.amount || this.amount===0 ) {
       
        form['limite'] = this.amount;
      }
      if (!(this.selectoption == null || this.selectoption == 'null')) {
        form['exp_date'] = this.selectoption;
        form['create_timespan'] = Date.now();
      }
      
      this.http
        .put(
          `http://localhost:8000/api/transection/paymentTokemGenerateDUR/${this.id}/`,
          { ...form, email: this.useremail },
          {
            withCredentials: true,
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        )
        .subscribe(
          (data) => {
       
            this.updateValue.emit(data);
          },
          (err) => {

          }
        );

      return;
    }

    this.form.patchValue({
      email: this.useremail,
      token: this.token,
      limite: this.amount,
      exp_date:
        this.selectoption == null || this.selectoption == 'null'
          ? null
          : this.selectoption,
    });
    const accessToken = localStorage.getItem('auth_access');
    if (this.form.valid) {
      this.errorMessage = '';
      this.http
        .post(
          'http://localhost:8000/api/transection/paymentTokemGenerate/',
          { ...this.form.value, email: this.useremail },
          {
            withCredentials: true,
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        )
        .subscribe(
          (data: any) => {
            this.getToken.emit(data);
          },
          (err: any) => {
            this.errorMessage = 'Invalid Token';
          }
        );
    } else {
      this.errorMessage = 'invalid value';
    }
  }
  closePopup() {
    this.onClose.emit();
  }
}
