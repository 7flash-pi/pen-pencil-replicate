import { Injectable } from '@angular/core';
import { AppUrlService } from 'src/app/constant/app-url.service';
import { GlobalService } from '../global-services/global.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BaseService } from '../base/base.service';
import { retry,tap } from 'rxjs/operators';
import { StorageService } from '../stroage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class NotificationService extends BaseService{

    constructor(
    private appUrl:AppUrlService,
    private globalService:GlobalService,
    public httpClient:HttpClient,
    public storageService:StorageService
  ) {
    super(httpClient,storageService);
  }

  getNotification(query?){
    let url=this.appUrl.GET_NOTIFICATION;

    if(!this.isEmpty(query)){
      url=url+ '?';
      for(const key in query){
        if(query.hasOwnProperty(key)){
          url += key + '=' + query[key] + '&';
        }
      }
      url = url.substr(0, url.length - 1);
    }
    console.log(url);
    return  this.httpClient.get(url).pipe(retry(1),tap());

  }

 getNotificationMetadata(campaignId:string){
    return this.httpClient.get(this.appUrl.GET_NOTIFICAION_METADATA(campaignId)).pipe(retry(1),tap())

  }

  readNotifications(data):Observable<any>{
    return this.httpClient.post(this.appUrl.READ_NOTIFICATION,data);

  }
}
