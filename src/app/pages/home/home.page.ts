import { Component, OnDestroy, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/provider/global-services/global.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit,OnDestroy {

  userInfo:any;
  userSub:Subscription;

  constructor(private globalService:GlobalService,
    private router:Router) { }
  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }

  ngOnInit() {
    this.getUserInfo();
    this.router.onSameUrlNavigation = 'reload';
  }

  getUserInfo(){
    this.userSub = this.globalService.getUser().subscribe( user => {
      if(user){
        this.userInfo = user;
      }
    });
  }

  goToQOTD(){
    this.router.navigate(['qotd']);
  }

  ionViewDidEnter(){
    if(this.globalService.isLoggedIn === true && this.userInfo && this.userInfo.id){

    }
    this.globalService.setUserMenuDisabled(false);
  }

}
