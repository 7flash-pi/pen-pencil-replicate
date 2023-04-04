import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { StorageService } from '../stroage/storage.service';
import { BannerModal } from '../base/base.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  public isLoggedIn:boolean=false;
  public accessToken;
  public homeData:any;
  public isOfflineMode=true;
  private _accessToken$: BehaviorSubject<string> = new BehaviorSubject<string>(null);
  public _user$: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public _isUserMenuDisabled$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public _homeData$: BehaviorSubject<any> = new BehaviorSubject<any>(null);



  constructor( private toast:ToastController,
                private storageService:StorageService,
                private router:Router) {
                  this.getUserToken();
                 }

  async showToast(message:string,duration,position,color?:string){
   const toast= await this.toast.create({
      message: message,
      position: position,
      duration: duration ? duration : 2000,
      color:color
    });
    toast.present();

  }

  getUserToken() {
    const token=this.storageService.getUserToken();
    if(token) {
      this.isLoggedIn=true;
      this.setAccessToken(token);
    } else {
      this.isLoggedIn=false;
    }
  }

  setAccessToken(token:string) {
    this.isLoggedIn = true;
    this.accessToken = token;
    this._accessToken$.next(token);
    this.storageService.setUserToken(token);
    return;
  }

  getAccessToken(){
    return this._accessToken$;
  }

  setUser(user){
    this._user$.next(user);
    return this.storageService.setUser(user)
  }

  getUser(){
    return this._user$;
  }
  getUserMenu() {
    return this._isUserMenuDisabled$;
}


setUserMenuDisabled(value) {
    this._isUserMenuDisabled$.next(value);
}

setHomeData(data: any) {
  this.homeData = data;
  this._homeData$.next(data);
}
removeHomeData() {
  this.homeData = null;
  this._homeData$.next(null);
}
async openFromSliderMain(item: BannerModal) {
  const prepString1 = 'https://nursingnextlive.com/';
  const prepString2 = 'https://www.nursingnextlive.com/';
  const prepString3 = 'www.nursingnextlive.com/';
  // @ts-ignore
  if (item && item.actionUrl && item.actionUrl.length > 0) {
      // @ts-ignore
      if (item['actionUrl'].includes(prepString1) || item.actionUrl.includes(prepString2) || item.actionUrl.includes(prepString3)) {
          if (item.actionUrl.includes(prepString1)) {
              const splitUrl = item.actionUrl.slice(prepString1.length, item.actionUrl.length);
              await this.router.navigateByUrl(splitUrl);
          } else if (item.actionUrl.includes(prepString2)) {
              const splitUrl = item.actionUrl.slice(prepString2.length, item.actionUrl.length);
              await this.router.navigateByUrl(splitUrl);
          } else if (item.actionUrl.includes(prepString3)) {
              const splitUrl = item.actionUrl.slice(prepString3.length, item.actionUrl.length);
              await this.router.navigateByUrl(splitUrl);
          }
      } else {
          window.open(item.actionUrl, '_system');
      }
  } else {
      this.showToast('Navigation not available.',1000,'bottom');
  }
}


}
