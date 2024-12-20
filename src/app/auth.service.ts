import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadInitInfo } from './data/ngrx/userinfo/userinfo.actions';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private list_of_auth_route: string[] = ['/transection'];
  constructor(private http: HttpClient, private store: Store) {}

  isAuthRoute(path: string): boolean {
    return this.list_of_auth_route.includes(path);
  }

  checkAuth(callback: Function) {
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
            loadInitInfo({ id: data.user_id, username: data.username, auth: true,email:data.email })
          );
          if (callback) {
            callback();
          }
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
                            id: data.user_id,
                            username: data.username,
                            auth: true,
                            email:data.email
                          })
                        );
                        if (callback) {
                          callback();
                        }
                      },
                      (error: any) => {
                        if (callback) {
                          callback({ error });
                        }
                      }
                    );
                },
                (error: any) => {
                  if (callback) {
                    callback({ error });
                  }
                }
              );



              
          }
        }
      );
  }
}
