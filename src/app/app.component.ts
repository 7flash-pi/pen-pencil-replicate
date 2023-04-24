import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from './provider/global-services/global.service';
import { Subscription, lastValueFrom } from 'rxjs';
import { register } from 'swiper/element/bundle';
import { AuthService } from './provider/auth-Service/auth.service';
import { StorageService } from './provider/stroage/storage.service';
import { NavController,Platform } from '@ionic/angular';
import { ORGANIZATION_ID } from './constant/global-contant-services';
import { HomeLayoutService } from './provider/home-layout.service';

register();//swiper register function


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy{
  public appPages = [
    { title: 'Smart digital library', url: 'sdl', img: 'assets/icons/sdl.png' },
    { title: 'My Package', url: 'my-package', img: 'assets/cbs-nn/hamburger/my_package.svg' },
    { title: 'Guidance and Counseling', url: 'guidance', img: 'assets/cbs-nn/hamburger/planet.svg' },
    { title: 'Success Stories', url: '#', img: 'assets/cbs-nn/hamburger/microphone.svg' },
    { title: 'Scholarship Test (NSA/MAT/SAT)', url: '#', img: 'assets/icons/test.png' },
    { title: 'Downloaded Videos', url: 'downloaded', img: 'assets/icons/download.svg' },
    { title: 'Downloaded videos Batch', url: 'downloaded', img: 'assets/icons/download.svg' },
    { title: 'Downloaded PDFs', url: 'downloaded', img: 'assets/icons/download.svg' },
    { title: 'Bookmark', url: '#', img: 'assets/cbs-nn/hamburger/bookmark.svg' },
    { title: 'Vacancy Management', url: '#', img: 'assets/icons/Icon-material-announcement.png'},
    { title: 'FAQ', url: '#', img: 'assets/cbs-nn/hamburger/faq.svg' },
    { title: 'About Nursing Next Live', url: '#', img: 'assets/cbs-nn/hamburger/about.svg' },
    { title: 'Resume Where You Left ', url: '#', img: 'assets/icons/resume-where-left.png' },
    { title: 'About Latest Version', url: '#', img: 'assets/cbs-nn/hamburger/version.png' },
    { title: 'Renew & Upgrade Package', url: '#', img: 'assets/cbs-nn/hamburger/recycle.svg' },
    { title: 'Refer & Win', url: 'referandwin', img: 'assets/cbs-nn/hamburger/refer.svg' },
    { title: 'Our Associates', url: 'associate', img: 'assets/cbs-nn/hamburger/associates.svg' },
    { title: 'Term & Policy', url: '#', img: 'assets/cbs-nn/hamburger/accept.svg' },
    { title: 'Logout', url: 'logout', img: 'assets/cbs-nn/hamburger/logout.svg' }

  ];


  userInfo:any;
  userSub:Subscription;
  tokenSub:Subscription;
  self() {
    this.authService.self().subscribe(
      res => {
        this.goAhead(res['data']);
      }
    );
  }



  nightMode:boolean=false;
  constructor(private router:Router,
    private globalService:GlobalService,
    private authService:AuthService,
    private storageService:StorageService,
    private navController:NavController,
    private platform:Platform,
    private homeLayout:HomeLayoutService) {
      this.doTokenExist();
    }
  ngOnDestroy(): void {
    if(this.userSub){
      this.userSub.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.getUserInfo();
    this.getHomeLayout();
  }

  gotomypackage(){
    this.router.navigate(['my-package']);
  }

  gotosmd(){
    this.router.navigate(['smd']);
  }

  getUserInfo(){
    this.userSub=this.globalService.getUser().subscribe( user =>{
      if(user){
      this.userInfo=user;
      }
    })
  }

  doTokenExist(){
   this.globalService.getAccessToken().subscribe(
      token => {
        if(token){
          this.self();

        }
      }, err =>{
        this.globalService.isLoggedIn=false;
        console.log("no token");
      }
    )

  }
  goto(page){
    if(page.url === "logout"){
      this.logoutUser();
    }
    else if(page.url === "associate"){
      this.globalService.showToast('Coming Soon!!!',1000,'bottom','light');
      this.router.navigate(['home']);
    }
    else{
      this.router.navigate([page.url]);
    }

  }

  async goAhead(user) {
    await this.globalService.setUser(user);
  }

  async logoutUser(){
    const deviceId=await this.storageService.getDeviceId();
    this.globalService.isLoggedIn=false;
    await lastValueFrom(this.authService.logoutUser(deviceId));
    this.storageService.clear();
    await this.navController.setDirection('root');
    await this.router.navigate(['login'])

  }

  async getHomeLayout(){
    const orgId = ORGANIZATION_ID;
    const query = {
        type: `banner,videoGallery,testimonials`,
        mode: 'nested'
    };
    try{
      const res = await lastValueFrom( this.homeLayout.getHomeLayout(orgId,query));
      this.globalService.setHomeData(res);
    }
    catch {

    }
  }
}
