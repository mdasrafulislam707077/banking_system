import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserInfo } from 'src/app/data/ngrx/userinfo/userinfo.state';
// import { userSelector } from 'src/app/data/ngrx/userinfo/userinfo.selector';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { clearUserInfo } from 'src/app/data/ngrx/userinfo/userinfo.actions';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  username: string;
  showpopup: boolean;
  popupType: string;
  showtoast: boolean;
  toastHeader: string;
  toastMessage: string;
  username$: Observable<UserInfo>;
  toastType: string;
  isAuth!: boolean;
  activeNav:boolean
  constructor(
    private store: Store<{ userinfo: UserInfo }>,
    private route: Router,
    private authS: AuthService
  ) {
    this.activeNav = false
    this.username = '';
    this.toastType = '';
    this.toastHeader = '';
    this.toastMessage = '';
    this.showpopup = false;
    this.popupType = 'login';
    this.showtoast = false;
    this.username$ = this.store.select('userinfo');
  }
  activePopup(type: string) {
    this.popupType = type;
    this.showpopup = true;
  }
  ngOnInit(): void {
    this.store.select('userinfo').subscribe((data: any) => {
      this.username = data.username;
      this.isAuth = data.auth;
    });
  }
  swtToSignin() {
    this.popupType = 'login';
  }
  swtToCreate() {
    this.popupType = 'create';
  }
  hidePopup() {
    this.showpopup = false;
  }
  closeToast() {
    this.showtoast = false;
  }
  signOut() {
    localStorage.removeItem('auth_access');
    localStorage.removeItem('auth_refresh');
    this.store.dispatch(clearUserInfo());
    this.toastHeader = 'Success';
    this.toastMessage = 'Account Succeessfully Signout ';
    this.toastType = 'signout';
    this.showtoast = true;

    if (this.authS.isAuthRoute(this.route.url)) {
      this.route.navigate(['/']);
    }
  }
  success(type: string) {
    this.showtoast = true;
    if (type == 'create') {
      this.toastHeader = 'Success';
      this.toastMessage = 'Create Succeessfully';
      this.toastType = 'signup';
    } else {
      this.toastHeader = 'Success';
      this.toastMessage = 'Signin Succeessfully';
      this.toastType = 'login';

      setTimeout(() => {
        this.hidePopup();
      }, 3000);
    }
  }
  changeNavActiveStatus(){
     if (this.activeNav) {
      this.activeNav = !this.activeNav
     } else{
      this.activeNav = !this.activeNav
     }
  }
}
