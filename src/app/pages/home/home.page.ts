import { Component, OnDestroy, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/provider/global-services/global.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit,OnDestroy {

  userInfo:any;
  userSub:Subscription;

  constructor(private globalService:GlobalService) { }
  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }

  ngOnInit() {
    this.getUserInfo();
    console.log(this.userInfo)
  }

  getUserInfo(){
    this.userSub = this.globalService.getUser().subscribe( user => {
      if(user){
        this.userInfo = user;
      }
    });

  }


}
