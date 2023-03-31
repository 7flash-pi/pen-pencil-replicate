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
export class NotificationService extends BaseService{

    constructor(
    private appUrl:AppUrlService,
    private globalService:GlobalService,
    public httpClient:HttpClient
  ) {
    super(httpClient);
  }

  getNotification(){
    let url=this.appUrl.GET_NOTIFICATION;
      url=url+'?';
      url = url.substr(0, url.length - 1);

    return  this.httpClient.get(url).pipe(retry(1),tap());
  }

 /* getNotificationMetadata(campaignId:string){
    return this.httpClient.get(this.appUrl.GET_NOTIFICAION_METADATA(campaignId)).pipe(retry(1),tap())

  }*/


}
