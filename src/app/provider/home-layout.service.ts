import { Injectable } from '@angular/core';
import { AppUrlService } from '../constant/app-url.service';
import { HttpClient } from '@angular/common/http';
import { StorageService } from './stroage/storage.service';
import { BaseService } from './base/base.service';
import { retry, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeLayoutService extends BaseService{

  constructor(private appUrl:AppUrlService,
    public httpClient:HttpClient,
    public storageService:StorageService) {
      super(httpClient,storageService);
    }

  getHomeLayout(orgId,query?){
    let url=this.appUrl.HOME_LAYOUT(orgId);

    if (!this.isEmpty(query)) {
      url = url + '?';
      for (const key in query) {
          if (query.hasOwnProperty(key)) {
              url += key + '=' + query[key] + '&';
          }
      }
      url = url.substr(0, url.length - 1);
    }
    return this.httpClient.get(url).pipe( retry(1),tap());
  }
}
