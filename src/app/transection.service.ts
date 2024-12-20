import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { injectaccountInfo } from './data/ngrx/accountInfo/accountinfo.action';
import { AccountInfo } from './data/ngrx/accountInfo/accountinfo.state';
import { loadInitInfo } from './data/ngrx/userinfo/userinfo.actions';
import { UserInfo } from './data/ngrx/userinfo/userinfo.state';

@Injectable({
  providedIn: 'root',
})
export class TransectionService {
  private user_id!: number;
  private useremail!: string;
  private username!: string;
  private domain: string;
  private ulr: string;
  constructor(
    private http: HttpClient,
    private store: Store<{ userinfo: UserInfo; accountinfo: AccountInfo }>
  ) {
    this.domain = 'http://localhost:8000';
    this.ulr = `${this.domain}/api/transection/`;
    this.store.select('userinfo').subscribe((data) => {
      this.user_id = data.id;
      this.useremail = data.email;
      this.username = data.username;
    });
  }

  transfar(body: any, callback: any) {
    this.tokenReload((err: any) => {
      if (!err) {
        this.http
          .post(
            `${this.ulr}transfar/`,
            {
              ...body,
              send_email: this.useremail,
              send_username: this.username,
              send_id: this.user_id,
            },
            this.getAccessHeader()
          )
          .subscribe(
            (data) => {
              if (callback) {
                callback(data);
              }
            },
            (err) => {
              if (callback) {
                callback(null, err);
              }
            }
          );
      }
    });
  }

  getAccessHeader() {
    const accessToken = localStorage.getItem('auth_access');
    return {
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };
  }

  deleteAutoToken(id: number, callback: any) {
    this.tokenReload((err: any) => {
      if (!err) {
        this.http
          .delete(
            `${this.ulr}paymentTokemGenerateDU/${id}/`,
            this.getAccessHeader()
          )
          .subscribe(
            (data: any) => {
              if (callback) {
                callback(data);
              }
            },
            (err: any) => {
              if (callback) {
                callback(null, err);
              }
            }
          );
      }
    });
  }

  updateAutoPayToken(id: any, data: any, callback: any) {
    this.tokenReload((err: any) => {
      if (!err) {
        this.http
          .put(
            `${this.ulr}paymentTokemGenerateDU/${id}/`,
            data,
            this.getAccessHeader()
          )
          .subscribe(
            (data: any) => {
              if (callback) {
                callback(data);
              }
            },
            (err: any) => {
              if (callback) {
                callback(null, err);
              }
            }
          );
      }
    });
  }

  createAutopayToken(body: any, callback: any) {
    this.tokenReload((err: any) => {
      if (!err) {
        this.http
          .post(
            `${this.ulr}createAutopayTokem/`,
            { ...body, id: this.user_id },
            this.getAccessHeader()
          )
          .subscribe(
            (data) => {
              if (callback) {
                callback(data);
              }
            },
            (err) => {
              if (callback) {
                callback(null, err);
              }
            }
          );
      }
    });
  }

  getAutoPayitems(callback: any) {
    this.tokenReload((err: any) => {
      if (!err) {
        const accessToken = localStorage.getItem('auth_access');
        this.http
          .get(`${this.ulr}getAutopayTokem/${this.user_id}`, {
            withCredentials: true,
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          })
          .subscribe(
            (data) => {
              if (callback) {
                callback(data);
              }
            },
            (err) => {
              if (callback) {
                callback(null, err);
              }
            }
          );
      } else {
        if (callback) {
          callback(null, err);
        }
      }
    });
  }

  createAutopayitem() {
    this.tokenReload((err: any) => {
      if (!err) {
      } else {
      }
    });
  }

  updateAutopay() {
    this.tokenReload((err: any) => {
      if (!err) {
      } else {
      }
    });
  }

  deleteAutopay() {
    this.tokenReload((err: any) => {
      if (!err) {
      } else {
      }
    });
  }

  getpaymentAddress(callback: any) {
    this.tokenReload((err: any) => {
      if (!err) {
        this.http
          .get(`${this.ulr}getPaymentTokemList/${this.user_id}`)
          .subscribe(
            (data) => {
              if (callback) {
                callback(data);
              }
            },
            (err) => {}
          );
      } else {
      }
    });
  }

  deleteAddressToken(id: number, callback: any) {
    this.tokenReload((err: any) => {
      if (!err) {
        this.http
          .delete(
            `http://localhost:8000/api/transection/paymentTokemGenerateDURDelete/${id}/`,
            this.getAccessHeader()
          )
          .subscribe(
            (data) => {
              if (callback) {
                callback('delete');
              }
            },
            (err) => {
              if (callback) {
                callback(null, err);
              }
            }
          );
      } else {
        if (callback) {
          callback(null);
        }
      }
    });
  }
  getPaymentToken(callback: any) {
    this.tokenReload((err: any) => {
      if (!err) {
        const accessToken = localStorage.getItem('auth_access');

        this.http
          .post(
            'http://localhost:8000/api/transection/PaymentTokemGenerate/',
            {
              email: this.useremail,
              username: this.username,
              id: this.user_id,
            },
            {
              withCredentials: true,
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            }
          )
          .subscribe(
            (data) => {
              callback(data, null);
            },
            (err) => {
              callback(null, err);
            }
          );
      } else {
        if (callback) {
          callback(null, err);
        }
      }
    });
  }

  changeSwt(id: number, value: boolean, callback: any) {
    const accessToken = localStorage.getItem('auth_access');
    const form: any = {};

    form['access'] = value;
    this.http
      .put(
        `http://localhost:8000/api/transection/paymentTokemGenerateDUR/${id}/`,
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
          if (callback) {
            callback(data);
          }
        },
        (err) => {}
      );
  }

  tempTokenDelete(id: any, callback?: any): void {
    this.tokenReload((err: any) => {
      const accessToken = localStorage.getItem('auth_access');
      if (!err) {
        this.http
          .delete(
            `http://localhost:8000/api/transection/paymentTokemGenerateDUR/${id}/`,
            {
              withCredentials: true,
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            }
          )
          .subscribe(
            (data: any) => {
              this.gettempToken((data: any) => {
                if (callback) {
                  callback(data);
                }
              });
            },
            (err) => {}
          );
      }
    });
  }

  tokenReload(callback: any): void {
    const refToken = localStorage.getItem('auth_refresh');
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
                    email: data.email,
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
  checkPin(pin: string, callback: any): void {
    this.tokenReload((err: any) => {
      if (!err) {
        const accessToken = localStorage.getItem('auth_access');
        this.http
          .post(
            'http://localhost:8000/api/transection/checkPin/',
            {
              id: this.user_id,
              pin: pin,
            },
            {
              withCredentials: true,
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            }
          )
          .subscribe(
            (data: any) => {
              if (callback) {
                callback();
              }
            },
            (err: any) => {
              if (callback) {
                callback(err);
              }
            }
          );
      } else {
      }
    });
  }

  getUserAccountInfo(): any {
    const accessToken = localStorage.getItem('auth_access');
    if (this.user_id) {
      this.http
        .post(
          'http://localhost:8000/api/transection/getUserAccountInfo/',
          {
            user_id: this.user_id,
          },
          {
            withCredentials: true,
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        )
        .subscribe((data: any) => {
          this.store.dispatch(
            injectaccountInfo({
              account_lvl: data.account_lvl,
              account_type: data.account_type,
              amount: data.amount,
              secure: data.secure,
            })
          );
        });
    }
    //
  }

  gettempToken(callback: any): any {
    const accessToken = localStorage.getItem('auth_access');
    this.http
      .get('http://localhost:8000/api/transection/paymentTokemGenerateList/', {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .subscribe((data) => {
        if (callback) {
          callback(data);
        }
      });
  }
}