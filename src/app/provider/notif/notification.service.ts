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

  getNotification(query?){
    let url=this.appUrl.GET_NOTIFICATION;

    if(!this.isEmpty(query)){
      query = query + '?';
    for (const key in query) {
      if (query.hasOwnProperty(key)){
          url += key + '=' + query[key] + '&';
        }
      }
    url = url.substr(0, url.length - 1);
    }

    return  this.httpClient.get(url).pipe(retry(1),tap());
  }


}
