import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppUrlService } from 'src/app/constant/app-url.service';
import { BaseService } from '../base/base.service';
import { StorageService } from '../stroage/storage.service';
import { GlobalService } from '../global-services/global.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService  extends BaseService{

  constructor(

    public httpclient:HttpClient,
    private appUrl:AppUrlService,
    public storageService:StorageService,
    private globalservice:GlobalService
  ) {
      super(httpclient,storageService)
   }

  self(query?){
    let url=this.appUrl.SELF;
    if(!this.isEmpty(query)){
      url = url+ '?' ;
      for( const key in query){
        if(query.hasOwnProperty(key)){
           url+= key+ '+' +query[key]+ '&';
        }
      }
      url = url.substr(0, url.length - 1);
    }

    if(this.isHasValue(url) && this.globalservice.isOfflineMode ){
      return this.getFromLocal(url);
    }
    else{
      return this.getFromServer(url);
    }

  }

  logoutUser(deviceId: string) {
    const data = {'deviceId': deviceId};
    return this.httpClient.post(this.appUrl.LOGOUT, data);
}


}
