import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { TransectionService } from 'src/app/transection.service';

@Component({
  selector: 'app-transection',
  templateUrl: './transection.component.html',
  styleUrls: ['./transection.component.scss'],
})
export class TransectionComponent implements OnInit {
  constructor(private routes: Router, private authS: AuthService,private traS:TransectionService) {}
  ngOnInit(): void {
    this.authS.checkAuth((err: any) => {
      if (err) {
        this.routes.navigate(['/']);
      }else{
        this.traS.getUserAccountInfo()
      }
    });
    
  }
}
