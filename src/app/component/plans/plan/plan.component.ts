import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { BackButtonComponent } from '../../back-button/back-button.component';
import { Router } from '@angular/router';
import { BannerModal, SuggestedVideoModal, VideoGalleryModal } from 'src/app/provider/base/base.model';
import { HomeLayoutService } from 'src/app/provider/home-layout.service';
import { FREE_PACK_PROGRAM_ID, ORGANIZATION_ID } from 'src/app/constant/global-contant-services';
import { lastValueFrom } from 'rxjs';
import { CommonModule } from '@angular/common';


@Component({
  standalone:true,
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss'],
  imports:[IonicModule,BackButtonComponent,CommonModule],
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
  suggestedVideos:Array<SuggestedVideoModal>=[];


  constructor(private router:Router,
    private homeLayoutService:HomeLayoutService) { }

  ngOnInit() {
    this.plan=history.state['plan'];
    this.getHomeLayout();
  }

  courseList = [
    {
        imageUrl: 'assets/new_assets/free_pack/olympiad.png',
        name: 'Nursing Olympiad',
        url: 'plans/nursing-olympiad',
        order: '04',
        type: '',
        desc: `Weekly Test to win Scholarship`
    },
    {
        imageUrl: 'assets/new_assets/free_pack/test.png',
        name: 'Daily Live Test',
        url: '/test-categories',
        order: '04',
        type: 'subjectWiseTest',
        desc: `Practice everyday to crack NORCET`
    },
    {
        imageUrl: 'assets/new_assets/free_pack/pencil.png',
        name: 'Revision Notes for LMR',
        url: '/list-page',
        order: '01',
        type: 'videoLecture',
        desc: ''
    },
    {
        imageUrl: 'assets/new_assets/free_pack/most_recent.png',
        name: 'Most Recent & Previous Years’ Papers',
        url: '/list-page',
        order: '03',
        type: 'prevPaper',
        desc: ''
    },

];

quickLinks = [
  {
      img: '../../../assets/new_assets/free_pack/video-card.svg',
      darkImg: '../../../assets/new_assets/free_pack/video-card-dark.svg',
      url: '#',
      type: 'video-chapter',
  },
  {
      img: '../../../assets/new_assets/free_pack/nursing-card.svg',
      darkImg: '../../../assets/new_assets/free_pack/toolkit-dark.svg',
      url: '#',
      type: 'video-chapter',
  },
  {
      img: '../../../assets/new_assets/free_pack/university-card.svg',
      darkImg: 'assets/new_assets/free_pack/university-dark.svg',
      url: '#',
      type: 'underGrad',
  }
];

async getHomeVideos(res){
  this.suggestedVideos=[];
  if(res && res['data'] && res['data']['videoGallery']){
    let videoModalArray:Array<VideoGalleryModal> = [];
    res['data']['videoGallery'].forEach( item => {
      videoModalArray.push(new VideoGalleryModal(item));
    });
    videoModalArray.forEach( singleVideoModalArray => {
      if( singleVideoModalArray?.title.includes(this.programId)){
        this.suggestedVideos = [...singleVideoModalArray?.videos] || [];
      }
    })

  }

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
        this.getHomeVideos(res);
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


  }
  goToContent($event,course){
    console.log(course);
    if(course?.name === 'Nursing Olympiad'){
      this.router.navigateByUrl(course?.url,{ state:{programId: this.programId}});
    }
  }




}
