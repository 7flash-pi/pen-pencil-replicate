import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/provider/global-services/global.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent  implements OnInit {
  userInfo:any;
  userSub:Subscription;

  constructor(private globalService:GlobalService) { }

  ngOnInit() {
    this.getUserInfo();
  }

 async  getUserInfo(){
    this.userSub=await this.globalService.getUser().subscribe( user => {
      if(user){
      this.userInfo=user;
      }
    })
  }

}
