import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { StorageService } from '../stroage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  public isLoggedIn:boolean=false;
  public accessToken;
  private _accessToken$: BehaviorSubject<string> = new BehaviorSubject<string>(null);
  public _user$: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public _isUserMenuDisabled$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);cd


  constructor( private toast:ToastController,
                private storageService:StorageService) {
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


}
