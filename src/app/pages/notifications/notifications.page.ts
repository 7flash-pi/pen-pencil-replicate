import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/provider/notif/notification.service';
import { LoadingService } from 'src/app/provider/loading/loading.service';
import { GlobalService } from 'src/app/provider/global-services/global.service';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { NotificationModal } from 'src/app/provider/base/base.model';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit{

  notificationList:Array<NotificationModal>=[];
  unReadMessage=0;
  processing:boolean=true;
  totalCount:number;

  constructor(
    private notificationService:NotificationService,
    private globalService:GlobalService,
    private loaderService:LoadingService
  ) { }

  ngOnInit() {
    this.getNotification();
    console.log(this.notificationList);
  }

  async getNotification(event?){
    try{
      const res= await this.notificationService.getNotification().subscribe();
      const notifications=[];
      res['data'].forEach(item => {
        notifications.push(new NotificationModal(item));
      });
      this.notificationList=this.notificationList.concat(notifications);
      }
   catch(err){
    console.log(err.message);
    }
  }







}

