import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlanModal } from 'src/app/provider/base/base.model';
import { StorageService } from 'src/app/provider/stroage/storage.service';
import { GlobalService } from 'src/app/provider/global-services/global.service';
import { Subscription } from 'rxjs';
import { StoreService } from 'src/app/provider/store-service/store.service';
import { lastValueFrom,firstValueFrom } from 'rxjs';


@Component({
  selector: 'app-my-package',
  templateUrl: './my-package.page.html',
  styleUrls: ['./my-package.page.scss'],
})
export class MyPackagePage implements OnInit {

userInfo:any;
userInfoSub:Subscription;
plans:Array<PlanModal>=[];
totalCount:number=0;
pageNo=1;
crashCourse=[];
orderProcessing:boolean;



  ngOnInit() {
  }
  constructor(
    private globalService:GlobalService,
    private router:Router,
    private storageService:StorageService,
    private storeService:StoreService
  ){
    this.getOrderPlans(this.pageNo);
  }


  getUserInfo(){
    this.globalService.getUser().subscribe( user => {
      if(user){
        this.userInfo=user;
      }
    })
  }

  async getOrderPlans(pageNo,event?){
    const data={
      page:pageNo,
    }
    if(pageNo === 1){
      this.orderProcessing=true;
    }
    try{
      const res = await lastValueFrom(this.storeService.getOrders(data));
           if(res['data']){
            this.plans= res['data'].map( item => new PlanModal(item));
           }

    }
    catch (err){
      console.log(err.message);
    }
  }

  async checkRenewal(event,plan?){

    if(plan && plan?.orderDetails && plan?.orderDetails?.remainingDays === 0){
      this.router.navigate(['my-package/no-renewal-plans']);
    }
    else{
      const msg="still"+plan.orderDetails.remainingDays + " days left"
      this.globalService.showToast(msg,1000,'mid','light');
    }
  }

}
