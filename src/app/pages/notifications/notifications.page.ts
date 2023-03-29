import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/provider/notif/notification.service';
import { LoadingService } from 'src/app/provider/loading/loading.service';
import { GlobalService } from 'src/app/provider/global-services/global.service';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit{

  constructor(
    private notificationService:NotificationService,
    private globalService:GlobalService,
    private loaderService:LoadingService
  ) { }

  ngOnInit() {
  }



}
