import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadInitInfo } from 'src/app/data/ngrx/userinfo/userinfo.actions';
import { UserInfo } from 'src/app/data/ngrx/userinfo/userinfo.state';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
   
   

    const accessToken = localStorage.getItem('auth_access');
    const refToken = localStorage.getItem('auth_refresh');
    this.http
      .get('http://127.0.0.1:8000/api/getuser/', {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .subscribe(
        (data: any) => {
          this.store.dispatch(
            loadInitInfo({ id: data.id, username: data.username, auth: true,email:data.email })
          );
        },
        (error) => {
          if (error.status == 401) {
            this.http
              .post('http://127.0.0.1:8000/api/refresh/', {
                refresh: refToken,
              })
              .subscribe(
                (data: any) => {
                  localStorage.setItem('auth_access', data.access);
                  this.http
                    .get('http://127.0.0.1:8000/api/getuser/', {
                      withCredentials: true,
                      headers: {
                        Authorization: `Bearer ${data.access}`,
                      },
                    })
                    .subscribe(
                      (data: any) => {
                        this.store.dispatch(
                          loadInitInfo({
                            id: data.id,
                            username: data.username,
                            auth: true,
                            email:data.email
                          })
                        );
                      },
                      (error: any) => {}
                    );
                },
                (error: any) => {}
              );
          }
        }
      );
  }
  constructor(
    private http: HttpClient,
    private store: Store<{ userinfo: UserInfo }>
  ) {}
}
