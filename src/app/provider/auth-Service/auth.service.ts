import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppUrlService } from 'src/app/constant/app-url.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private httpclient:HttpClient,
    private appUrl:AppUrlService
  ) { }

  logoutUser( deviceId){
    const data={'deviceId':deviceId};
    return this.httpclient.post(this.appUrl.LOGOUT,data);

  }


}
