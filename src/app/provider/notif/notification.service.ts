import { Injectable } from '@angular/core';
import { AppUrlService } from 'src/app/constant/app-url.service';
import { GlobalService } from '../global-services/global.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BaseService } from '../base/base.service';
import { retry,tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

    constructor(
    private appUrl:AppUrlService,
    private globalService:GlobalService,
    private httpClient:HttpClient
  ) {
  }

  getNotification(query?){
    let url=this.appUrl.GET_NOTIFICATION;
    return  this.httpClient.get(url).pipe(retry(1),tap());
  }

  /*getNotificationMetadata(campaignId:string){
    return this.httpClient.get(this.appUrl.GET_NOTIFICAION_METADATA(campaignId)).pipe(retry(1),tap())

  }*/


}
