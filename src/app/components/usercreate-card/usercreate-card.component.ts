import { HttpClient  } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-usercreate-card',
  templateUrl: './usercreate-card.component.html',
  styleUrls: ['./usercreate-card.component.scss'],
})
export class UsercreateCardComponent {
  @Output() onClose: EventEmitter<void>;
  @Output() swtToSignin: EventEmitter<void>;
  @Output() createSuccess: EventEmitter<void>;
  account_type: string;
  first_name: string;
  last_name: string;
  password: string;
  co_password: string;
  email: string;
  username: string;
  phone: string;
  form: FormGroup;
  invalidFormMessage: string;
  errorMessage:any = {}

  constructor(private fb: FormBuilder, private http: HttpClient ) {
   
    this.form = fb.group({
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      password: ['', [Validators.required]],
      co_password: ['', [Validators.required]],
      email: ['', [Validators.required]],
      username: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      account_type: ['', [Validators.required]],
    });
 
    this.invalidFormMessage = '';
    this.first_name = '';
    this.last_name = '';
    this.password = '';
    this.co_password = '';
    this.email = '';
    this.username = '';
    this.phone = '';
    this.account_type = 'personal';
    this.onClose = new EventEmitter<void>();
    this.swtToSignin = new EventEmitter<void>();
    this.createSuccess = new EventEmitter<void>();
  }
  swtSignIn() {
    this.swtToSignin.emit();
  }
  swtToPersonal() {
    this.account_type = 'personal';
  }
  swtToBuss() {
    this.account_type = 'buss';
  }
  closeCard() {
    this.onClose.emit();
  }
  onSubmit() {
    this.errorMessage = {}
    this.form.patchValue({
      first_name: this.first_name,
      last_name: this.last_name,
      email: this.email,
      password: this.password,
      co_password: this.co_password,
      username: this.username,
      phone: this.phone,
      account_type: this.account_type,
    });
    if (this.form.valid) {
      this.invalidFormMessage = '';
      this.http.post('http://127.0.0.1:8000/api/create/',this.form.value,).subscribe((data)=>{
        this.invalidFormMessage = '';
        this.first_name = '';
        this.last_name = '';
        this.password = '';
        this.co_password = '';
        this.email = '';
        this.username = '';
        this.phone = '';
      this.createSuccess.emit()
      },(error)=>{
        this.errorMessage = error.error
      })
    } else {
      this.invalidFormMessage = 'Form all fileds required';
    }
  }
}
