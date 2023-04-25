import { Component, OnDestroy, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/provider/global-services/global.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router'
import { MenuController, Platform } from '@ionic/angular';
import { BannerModal, NewSuggestedVideoModal, SuggestedVideoModal, VideoGalleryModal } from 'src/app/provider/base/base.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit,OnDestroy {

  userInfo:any;
  userSub:Subscription;
  bannersB1: Array<BannerModal> = [];
  sliders: Array<BannerModal> =[];
  homeDataSub:Subscription;
  suggestedVideos:Array<NewSuggestedVideoModal>=[];

  slideOpt={
    initialSlide: 0,
    slidesPerView: 1,
    effect: 'slide',
    autoplay:{
      delay:3000,
    },
    loop: true,
    updateOnWindowResize: true,
    roundLengths: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
  }


  constructor(private globalService:GlobalService,
    private router:Router,
    public menuCtrl:MenuController,
    private platform:Platform) { }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }

  ngOnInit() {
    this.getUserInfo();
    this.getHomeLayot();
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

  async getHomeLayot(){
    this.homeDataSub=this.globalService._homeData$.subscribe( res => {
      if(res){
        this.getSliders(res);
        this.getHomeVideos(res);
      }
    })
  }

  async getSliders(res){
    if(res && res['data'] && res['data']['banner'] && res['data']['banner']['banners'] && res['data']['banner']['banners'].length > 0){
      res['data']['banner']['banners'].forEach( item => {
        this.sliders.push(new BannerModal(item));
      });
      this.bannersB1= this.sliders.filter(item => item.title === 'B1');
    }
  }

  getHomeVideos(res){
    this.suggestedVideos=[];

    if(res && res['data'] && res['data']['videoGallery']){

      let videoGallery: Array<VideoGalleryModal> =[];
      let videos: Array<SuggestedVideoModal> =[];

      res['data']['videoGallery'].forEach( item => {
         videoGallery.push( new VideoGalleryModal(item));
         })

      videoGallery.forEach(item => {
        if (item.title.toLowerCase() === 'web' && (this.platform.is('desktop') || this.platform.is('mobileweb'))) {
          videos = [...item.videos] || [];
          } else if (item.title.toLowerCase() === 'android' && this.platform.is('cordova')) {
          videos = [...item.videos] || [];
          }
        });


        videos.reverse().forEach(item => {
          this.suggestedVideos.push(
              new NewSuggestedVideoModal(item)
          );
      });
    }

  }


  openVideo(event,video){
    this.router.navigate(['video-player']);
  }
  openPlayStore(){
    window.open('https://play.google.com/store/apps/details?id=com.live.nursingnext');
  }
}
