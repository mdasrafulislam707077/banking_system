import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AccountInfo } from 'src/app/data/ngrx/accountInfo/accountinfo.state';
import { TransectionService } from 'src/app/transection.service';

@Component({
  selector: 'app-transection-box',
  templateUrl: './transection-box.component.html',
  styleUrls: ['./transection-box.component.scss'],
})
export class TransectionBoxComponent {
  list_of_token: any[];
  list_of_Addresstoken: any[];
  list_of_AutoAddresstoken: any[];
  cardType: string;
  isactivePopup: boolean;
  isactiveToast: boolean;
  isAccountSecure: boolean | undefined;
  isActivePinCard: boolean;
  tokenCardInfo!: any;
  constructor(
    private http: HttpClient,
    private transectionS: TransectionService,
    private store: Store<{ accountinfo: AccountInfo }>
  ) {
    this.list_of_Addresstoken = [];
    this.list_of_AutoAddresstoken = [];
    this.isactiveToast = false;
    this.isActivePinCard = true;
    this.isAccountSecure = false;

    this.store.select('accountinfo').subscribe((data) => {
      this.isAccountSecure = data.secure;
    });
    this.cardType = '';
    this.isactivePopup = false;
    this.list_of_token = [];
    transectionS.gettempToken((data: any) => {
      this.list_of_token = data;
    });
    transectionS.getpaymentAddress((data: any) => {
      this.list_of_Addresstoken = data;
    });
    this.transectionS.getAutoPayitems((data: any, err: any) => {
      if (!err) {
        this.list_of_AutoAddresstoken = data;
      }
    });
  }

  activePopup(cardType: string, obj?: Object) {
    this.isActivePinCard = true;
    this.isactivePopup = true;
    this.cardType = cardType;
    if (obj) {
      this.tokenCardInfo = obj;
    }
  }






  updateAutoToken(obj:any){
   
    this.closePopup()
  }

  updateTokenValue(obj: any) {
    const newItems = this.list_of_token.map((element) => {
      if (element.id == obj.id) {
        return obj;
      }
      return element;
    });
    this.list_of_token = newItems;
    this.closePopup();
  }

  pinSubmit(): void {
    this.isActivePinCard = false;
    if (this.cardType == 'tempTokenDelete') {
      this.transectionS.tempTokenDelete(this.tokenCardInfo.id, (data: any) => {
        this.list_of_token = data;
        this.closePopup();
      });
    } else if ('tempTokenCopy' == this.cardType) {
      navigator.clipboard.writeText(this.tokenCardInfo.token).then(() => {
        this.isactiveToast = true;
        this.isactivePopup = false;
      });
    } else if ('tempTokenAccessStatus' == this.cardType) {
      this.transectionS.changeSwt(
        this.tokenCardInfo.id,
        !this.tokenCardInfo.access,
        (data: any) => {
          this.updateTokenValue(data);
        }
      );
      this.isactivePopup = false;
    } else if ('addressTokenGenerate' == this.cardType) {
      this.transectionS.getPaymentToken((data: any) => {
        this.list_of_Addresstoken.push(data);
        this.closePopup();
      });
    } else if ('addressTokenCopy' == this.cardType) {
      
      navigator.clipboard.writeText(this.tokenCardInfo).then(() => {
        this.closePopup();
        this.isactiveToast = true;
      });
    } else if ('addressTokenDelete' == this.cardType) {
      this.transectionS.deleteAddressToken(
        this.tokenCardInfo.id,
        (data: any, err: any) => {
          if (data) {
            this.list_of_Addresstoken = this.list_of_Addresstoken.filter(
              (element) => element.id != this.tokenCardInfo.id
            );
          }
          this.closePopup();
        }
      );
    }else if ('autoPayTokenDelete' == this.cardType) {
        this.transectionS.deleteAutoToken( this.tokenCardInfo.id,(data:any,err:any)   =>{
            if (!err) {
                this.list_of_AutoAddresstoken = this.list_of_AutoAddresstoken.filter((element:any)=>element.id!=this.tokenCardInfo.id)
                this.closePopup()
            }
        })
    }else if ('autoPayTokenView'==this.cardType) {
      
    }
  }

  toasthide() {
    this.isactiveToast = false;
  }

  createAutoToken(data: any) {
    this.list_of_AutoAddresstoken.push(data);
    this.closePopup()
  }

  closePopup() {
    this.isactivePopup = false;
    this.isActivePinCard = true;
  }
  onCollectToken(object: any) {
    this.list_of_token.push(object.info);
    this.isactivePopup = false;
    this.isActivePinCard = true;
  }
  getExpTime(time: any, time2?: any) {
    let fulltime = 0;
    if (time2) {
      fulltime = parseInt(time) + parseInt(time2);
    } else {
      fulltime = parseInt(time);
    }

    let date = new Date(fulltime);
    let formattedDate = date.toLocaleDateString();
    let formattedTime = date.toLocaleTimeString();
    return `${formattedDate} ${formattedTime}`;
  }
}
