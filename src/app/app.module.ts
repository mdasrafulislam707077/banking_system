import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from './auth.service';
import { AboutCardComponent } from './components/about-card/about-card.component';
import { AboutInfoCardComponent } from './components/about-info-card/about-info-card.component';
import { AboutMoreInfoComponent } from './components/about-more-info/about-more-info.component';
import { AchiveComponent } from './components/achive/achive.component';
import { AskBoxComponent } from './components/ask-box/ask-box.component';
import { AutoPayTokenDisplayComponent } from './components/auto-pay-token-display/auto-pay-token-display.component';
import { AutopayGenaratorCardEditComponent } from './components/autopay-genarator-card-edit/autopay-genarator-card-edit.component';
import { AutopayGenaratorCardComponent } from './components/autopay-genarator-card/autopay-genarator-card.component';
import { BankCardBox001Component } from './components/bank-card-box001/bank-card-box001.component';
import { CardComponent } from './components/card/card.component';
import { CloseButtonComponent } from './components/close-button/close-button.component';
import { ContactUsFormServiceContactComponent } from './components/contact-us-form-service-contact/contact-us-form-service-contact.component';
import { DisplayFrameComponent } from './components/display-frame/display-frame.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ImageWithTextComponent } from './components/image-with-text/image-with-text.component';
import { InvalidMessageComponent } from './components/invalid-message/invalid-message.component';
import { LoginCardComponent } from './components/login-card/login-card.component';
import { MarkettingCard001Component } from './components/marketting-card001/marketting-card001.component';
import { MarkettingCard002Component } from './components/marketting-card002/marketting-card002.component';
import { OurServiceComponent } from './components/our-service/our-service.component';
import { PaymentTokenGererateComponent } from './components/payment-token-gererate/payment-token-gererate.component';
import { PinCardComponent } from './components/pin-card/pin-card.component';
import { PopupFrameComponent } from './components/popup-frame/popup-frame.component';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';
import { QusCardComponent } from './components/qus-card/qus-card.component';
import { RecordTableComponent } from './components/record-table/record-table.component';
import { SavingDisplayComponent } from './components/saving-display/saving-display.component';
import { ServiceBoxComponent } from './components/service-box/service-box.component';
import { ServiceCard001Component } from './components/service-card001/service-card001.component';
import { ServiceDisplayComponent } from './components/service-display/service-display.component';
import { TOASTSimpleMessageComponent } from './components/toast-simple-message/toast-simple-message.component';
import { TOASTComponent } from './components/toast/toast.component';
import { TransectionBoxComponent } from './components/transection-box/transection-box.component';
import { TransectionInfoDisplayComponent } from './components/transection-info-display/transection-info-display.component';
import { TransferUiComponent } from './components/transfer-ui/transfer-ui.component';
import { UsercreateCardComponent } from './components/usercreate-card/usercreate-card.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { NGRXstorage } from './data/ngrx/storage';
import { ActiveMobileNavDirective } from './directive/active-mobile-nav.directive';
import { TransectionService } from './transection.service';
import { AboutComponent } from './view/about/about.component';
import { CommonComponent } from './view/common/common.component';
import { ContactComponent } from './view/contact/contact.component';
import { HomeComponent } from './view/home/home.component';
import { SavingComponent } from './view/saving/saving.component';
import { ServiceComponent } from './view/service/service.component';
import { TransectionComponent } from './view/transection/transection.component';
import { CreditCardComponent } from './view/credit-card/credit-card/credit-card.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'service', component: ServiceComponent },
  { path: 'transection', component: TransectionComponent },
  { path: 'career/saving', component: SavingComponent },
  { path: 'career/card', component: CreditCardComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DisplayFrameComponent,
    AchiveComponent,
    AboutCardComponent,
    MarkettingCard001Component,
    BankCardBox001Component,
    ServiceBoxComponent,
    FooterComponent,
    MarkettingCard002Component,
    AskBoxComponent,
    CardComponent,
    ProfileCardComponent,
    CommonComponent,
    HomeComponent,
    AboutComponent,
    ServiceComponent,
    TransectionComponent,
    ContactComponent,
    RecordTableComponent,
    TransectionInfoDisplayComponent,
    TransectionBoxComponent,
    PopupFrameComponent,
    CloseButtonComponent,
    LoginCardComponent,
    UsercreateCardComponent,
    CreateUserComponent,
    TOASTComponent,
    TOASTSimpleMessageComponent,
    PaymentTokenGererateComponent,
    QusCardComponent,
    PinCardComponent,
    InvalidMessageComponent,
    AutopayGenaratorCardComponent,
    AutopayGenaratorCardEditComponent,
    TransferUiComponent,
    AutoPayTokenDisplayComponent,
    ActiveMobileNavDirective,
    ImageWithTextComponent,
    AboutMoreInfoComponent,
    AboutInfoCardComponent,
    ContactUsFormServiceContactComponent,
    ServiceDisplayComponent,
    OurServiceComponent,
    ServiceCard001Component,
    SavingComponent,
    SavingDisplayComponent,
    CreditCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot(NGRXstorage),
  ],
  providers: [AuthService, TransectionService],
  bootstrap: [AppComponent],
})
export class AppModule {}
