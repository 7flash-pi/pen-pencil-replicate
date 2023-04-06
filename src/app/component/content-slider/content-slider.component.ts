import { Component, OnInit, ViewChild } from '@angular/core';
import { BannerModal } from 'src/app/provider/base/base.model';
import { GlobalService } from 'src/app/provider/global-services/global.service';
import { LoginService } from 'src/app/provider/login/login.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-content-slider',
  templateUrl: './content-slider.component.html',
  styleUrls: ['./content-slider.component.scss'],
})
export class ContentSliderComponent  implements OnInit {

  sliders:Array<BannerModal>=[];
  bannerB1:Array<BannerModal>=[];
  bannerB2: Array<BannerModal> = [];
  bannerB3: Array<BannerModal> = [];
  homeDataSubs:Subscription;
  @ViewChild('slideWithNav', {static:false}) slider;

  slideOpt={
    initialSlide: 0,
    slidesPerView: 1,
    effect: 'slide',
    speed: 1000,
    autoplay: true,
    loop: true,
    updateOnWindowResize: true,
    roundLengths: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
  }

  constructor(
    private globalService:GlobalService,
    private router:Router,
    private loginService:LoginService
  ) { }


  ngOnInit() {
    this.getHomeLayout();
    console.log(this.bannerB2);

  }
  async getHomeLayout() {
    this.homeDataSubs = this.globalService._homeData$.subscribe(res => {
        if (res) {
            this.getSliders(res);
            console.log(res);
        }
    });

}

async getSliders(res) {
  if (res && res['data'] && res['data']['banner'] && res['data']['banner']['banners'] && res['data']['banner']['banners'].length > 0) {
      res['data']['banner']['banners'].forEach(item => {
          this.sliders.push(new BannerModal(item));
      });
      this.bannerB1 = this.sliders.filter(item => item.title === 'B1');
      this.bannerB2 = this.sliders.filter(item => item.title === 'B2');
      this.bannerB3 = this.sliders.filter(item => item.title === 'B3');
  }
}
async openFromSlider(item: BannerModal) {

  await this.globalService.openFromSliderMain(item);
  console.log(item);
}






}
