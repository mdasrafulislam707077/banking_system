import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/auth.service';
import { AccountInfo } from 'src/app/data/ngrx/accountInfo/accountinfo.state';
import { UserInfo } from 'src/app/data/ngrx/userinfo/userinfo.state';
import { TransectionService } from 'src/app/transection.service';
@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.scss'],
})
export class CreditCardComponent implements OnInit {
  private user_id!: number;
  private useremail!: string;
  username!: string;
  goldCard!: any;
  silverCard!: any;
  platinumCard!: any;
  constructor(
    private authService: AuthService,
    private store: Store<{ userinfo: UserInfo; accountinfo: AccountInfo }>,
    private routes: Router,
    private traS: TransectionService
  ) {}
  requestCard(cardType: string): void {
    this.traS.cardRequest(
      { cardType: cardType, email: this.useremail },
      (cl: any) => {
        if (cl?.data?.author_id) {
          if (cl.data.card_lvl == 'GOLD') {
            this.goldCard = cl.data;
          } else if (cl.data.card_lvl == 'SILVER') {
            this.silverCard = cl.data;
          } else if (cl.data.card_lvl == 'PLATINUM') {
            this.platinumCard = cl.data;
          }
        }
      }
    );
  }
  ngOnInit(): void {
    this.authService.checkAuth((err: any) => {
      this.store.select('userinfo').subscribe((data) => {
        this.user_id = data.id;
        this.useremail = data.email;
        this.username = data.username;
        if (!this.user_id && !this.useremail && !this.username) {
          this.routes.navigate(['/']);
        }
      });
      if (err) {
        this.routes.navigate(['/']);
      } else {
        this.traS.getUserAccountInfo();
        this.traS.getCardInfo(this.useremail, (data: any) => {
          data?.card_items_info?.forEach((element: any) => {
            if (element.card_lvl == 'GOLD') {
              this.goldCard = element;
            }

            if (element.card_lvl == 'SILVER') {
              this.silverCard = element;
            }
            if (element.card_lvl == 'PLATINUM') {
              this.platinumCard = element;
            }
          });
        });
      }
    });
  }
}
