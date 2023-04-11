import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { PlanZeroComponent } from '../plan-zero/plan-zero.component';
import { BackButtonComponent } from '../../back-button/back-button.component';
import { Router } from '@angular/router';
import { BannerModal } from 'src/app/provider/base/base.model';
import { HomeLayoutService } from 'src/app/provider/home-layout.service';
import { FREE_PACK_PROGRAM_ID, ORGANIZATION_ID } from 'src/app/constant/global-contant-services';
import { lastValueFrom } from 'rxjs';
import { NgFor } from '@angular/common';


@Component({
  standalone:true,
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss'],
  imports:[IonicModule,PlanZeroComponent,BackButtonComponent,NgFor],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class PlanComponent  implements OnInit {

  plan:any;

  slideOpt={
    initialSlide: 0,
        slidesPerView: 1,
        effect: 'slide',
        speed: 100,
        autoplay: true,
        loop: true,
        updateOnWindowResize: true,
        roundLengths: true,
        watchOverflow: true,
  }
  banner: BannerModal;
  subjectId = '61ea98942a07fc00118419cf';
  chapterId = '61ea98b45cf46a0018a7d226';
  topicId = '61ea98bdfe9a870012d7302c';
  bannersList: Array<BannerModal> = [];
  programId: string = FREE_PACK_PROGRAM_ID;
  imageUrl:string;


  constructor(private router:Router,
    private homeLayoutService:HomeLayoutService) { }

  ngOnInit() {
    this.plan=history.state['plan'];
    this.getHomeLayout();
  }

  async getHomeLayout(){
    const query = {
      type: 'videoGallery,banner',
      mode: 'nested'
    };
    try{
      const res= await lastValueFrom( this.homeLayoutService.getHomeLayout(ORGANIZATION_ID,query));
      if(res && res?.['data']){
        this.getBanner(res);
      }


    }
    catch(err){
      console.log(err.message);
    }

  }

  getBanner(res){
    const newBanner=res['data']['banner']['banners'];
    newBanner.forEach(item => {
      if(item.title === this.programId){
        this.banner=item;
        this.bannersList.push(new BannerModal(item));
      }
    });
   this.imageUrl=this.banner.image.baseUrl+this.banner.image.key;
   console.log(this.bannersList);

  }




}
