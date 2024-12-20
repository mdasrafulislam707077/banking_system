import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { loadInitInfo } from 'src/app/data/ngrx/userinfo/userinfo.actions';
import { userSelector } from 'src/app/data/ngrx/userinfo/userinfo.selector';
@Component({
  selector: 'app-login-card',
  templateUrl: './login-card.component.html',
  styleUrls: ['./login-card.component.scss'],
})
export class LoginCardComponent {
  @Output() onClose: EventEmitter<void>;
  @Output() changeToCreate: EventEmitter<void>;
  @Output() successLogin: EventEmitter<void>;
  email: string;
  password: string;
  username: string;
  form: FormGroup;
  errorMessage: string;
  isAuth: boolean;
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private store: Store
  ) {
    this.isAuth = false
    store.select(userSelector).subscribe((data) => {
      this.isAuth = data.auth;
    });
    this.errorMessage = '';
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      username: ['', Validators.required],
    });
    this.username = '';
    this.email = '';
    this.password = '';
    this.onClose = new EventEmitter<void>();
    this.changeToCreate = new EventEmitter<void>();
    this.successLogin = new EventEmitter<void>();
  }
  swtCreate() {
    this.changeToCreate.emit();
  }
  closeLoginCard() {
    this.onClose.emit();
  }
  submitLogin() {
    if (this.isAuth) {
      return;
    }
    this.form.patchValue({
      username: this.username,
      email: this.email,
      password: this.password,
    });
    if (this.form.valid) {
      this.errorMessage = '';
      this.http
        .post('http://127.0.0.1:8000/api/login/', this.form.value, {
          withCredentials: true,
        })
        .subscribe(
          (data: any) => {
            const access: string = data.access;
            const refresh: string = data.refresh;
            this.store.dispatch(
              loadInitInfo({
                username: data.username,
                id: data.id,
                auth: true,
                email:data.email
              })
            );
            this.email = '';
            this.username = '';
            this.password = '';
            localStorage.setItem('auth_access', access);
            localStorage.setItem('auth_refresh', refresh);
            this.successLogin.emit();
          },
          (error) => {
            if (error.status) {
              this.errorMessage = 'authentication failed !!!';
            } else {
              this.errorMessage = 'serverside issue try again later';
            }
          }
        );
    } else {
      this.errorMessage = 'all fileds required';
    }
  }
}
