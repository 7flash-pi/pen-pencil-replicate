import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';

import { GlobalService } from './provider/global-services/global.service';
import { StorageService } from './provider/stroage/storage.service';
import { finalize ,tap } from 'rxjs/operators';
import { APP_VERSION, ORGANIZATION_ID } from './constant/global-contant-services';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { AuthService } from './provider/auth-Service/auth.service';
import { NavController } from '@ionic/angular';

@Injectable()
export class InterceptorService implements HttpInterceptor {

  authToken:string;
  platform:any;


  constructor(
    private globalService:GlobalService,
    private storageService:StorageService,
    private router:Router,
    private pf:Platform,
    private authService:AuthService,
    private navController:NavController
  ) {
    this.platform=this.pf;
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

   this.authToken=this.globalService.accessToken
   console.log(this.authToken);
   this.authToken=this.storageService.getUserToken();
   console.log(this.authToken);

    const authReq=request.clone( {
      setHeaders:{
        'Authorization' :'Bearer '+ this.authToken,
        'client-id':ORGANIZATION_ID,
        'client-version':APP_VERSION,
        'client-Type':(this.platform.is('crodova')) ? 'MOBILE' :'WEB'
      }
    })
      return next.handle(authReq);
  }

  async logoutUser(){
    const deviceId=this.storageService.getDeviceId();
    if(this.globalService.isLoggedIn === true){
      this.authService.logoutUser(deviceId).subscribe();
      this.globalService.isLoggedIn = false;
      this.storageService.clear();
      await this.navController.setDirection('root');
      this.router.navigate['login'];

    }
  }
}
