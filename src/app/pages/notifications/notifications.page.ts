import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/provider/notif/notification.service';
import { LoadingService } from 'src/app/provider/loading/loading.service';
import { GlobalService } from 'src/app/provider/global-services/global.service';
import { Router } from '@angular/router';
import { NotificationModal } from 'src/app/provider/base/base.model';


@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit{

  notificationList:Array<NotificationModal>=[];
  unreadMessage=0;
  processing:boolean=true;
  totalCount:number;
  pageNo=1;

  constructor(
    private notificationService:NotificationService,
    private globalService:GlobalService,
    private loaderService:LoadingService,
    private router:Router
  ) { }

  ngOnInit() {
    this.getNotification(this.pageNo);
  }

  async getNotification(pageNo,event?){

    const query={
      page:pageNo
    }
    if(pageNo === 1){
      this.notificationList=[];
      this.processing=true;

    }
    try{
      const res= await this.notificationService.getNotification(query).toPromise()
      const notifications=[];
      res['data'].forEach(item => {
        notifications.push(new NotificationModal(item));
      });

      this.notificationList=this.notificationList.concat(notifications);
      this.totalCount = res['paginate'].totalCount;
      console.log(this.totalCount);
      const data = [];
      this.notificationList.forEach((item) => {
          if (!item['isRead']) {
              const obj = {
                  _id: item['_id']
              };
              data.push(obj);
          }
          if (data.length) {
            this.unreadMessage = data.length;
        }
        if (event) {
            setTimeout(() => {
                event.target.complete();
                if (this.notificationList.length >= this.totalCount) {
                    event.target.disabled = true;
                }
            }, 500);
        }
      });
    }
   catch(err){
    console.log(err.message);

   }
}

toNotificationPath(notification:NotificationModal){
if(notification && notification.campaignId && notification.campaignId.page !== '0'){
    this.router.navigateByUrl('home');
  }
  else if( notification.campaignId.actionType !== 'NO_ACTION'){
    this.getMetaData(notification);
  }
  else{
    this.globalService.showToast("No Action Found",1000,'bottom');
  }

}
getMetaData(item: NotificationModal) {
  if (item.campaignId.actionType === 'OPEN_LINK') {
      window.open(item.campaignId.metaData.link, '_system');
      return;
  }
  this.router.navigateByUrl('/tabs/tabs/dashboard-tab');
}

async loadMore(event){

  this.pageNo++;
  await this.getNotification(this.pageNo,event);

}

markRead(data:Array<NotificationModal>){
  const notificationIds=[];
  data.forEach( item => {
    if(item && !item['isRead']){
      item['isRead']=true;
      notificationIds.push(item._id);
    }
  });

  this.unreadMessage=0;
  this.notificationService.readNotifications({notificationIds}).subscribe();


}






}

