import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { BackButtonComponent } from '../back-button/back-button.component';
import { HomeLayoutService } from 'src/app/provider/home-layout.service';
import { BannerModal } from 'src/app/provider/base/base.model';
import { ORGANIZATION_ID } from 'src/app/constant/global-contant-services';
import { lastValueFrom } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/provider/global-services/global.service';

@Component({
  standalone:true,
  selector: 'app-nursing-olypmpiad',
  templateUrl: './nursing-olypmpiad.component.html',
  styleUrls: ['./nursing-olypmpiad.component.scss'],
  imports:[IonicModule,BackButtonComponent,CommonModule],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class NursingOlypmpiadComponent  implements OnInit {

  constructor(private homeLayoutService:HomeLayoutService,
    private router:Router,
    private globalService:GlobalService) { }
  programId;
  banners:Array<BannerModal>=[];
  slideOpt = {
    initialSlide: 0,
    slidesPerView: 1,
    effect: 'slide',
    speed: 1000,
    autoplay: true,
    loop: true,
    updateOnWindowResize: true,
    roundLengths: true,
    watchOverflow: true,
  };

  ngOnInit() {
    this.programId=history.state['programId'];
    this.getHomeLayout();
  }

  testList = [
    {
      name: 'Nursing Olympiad',
      img: '/assets//olympiad/nursing-card.png',
      id: '62554fd1257dd20018d06887'
    },
    {
      name: 'Super Olympiad',
      img: '/assets//olympiad/super-card.png',
      id: '62554ff4b2fd910059df6fea'
    },
  ];

  async getHomeLayout() {
    const query = {
      type: 'videoGallery,banner',
      mode: 'nested'
    }
    try {
      const res = await lastValueFrom(this.homeLayoutService.getHomeLayout(ORGANIZATION_ID, query));

      if (res && res['data']) {
        this.getBanner(res)
      }
    } catch (e) {
      console.log(e.message);
    }
  }

  getBanner(res){
    const id= '62554fd1257dd20018d06887';
    if(res){
      res['data']['banner']['banners'].forEach(item => {

        if(item?.title === id){
          this.banners.push( new BannerModal(item));
        }

      });
    }
    console.log(this.banners);
  }

  goToContent(event,item){
    if(item?.name === 'Nursing Olympiad' ){
      this.router.navigate(['plans/nursing-olympiad/nursing-detail']);
    }
    else{

      this.globalService.showToast('This test is expired',1000,'bottom');
    }
  }

}


