import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';


@Injectable({
  providedIn: 'root'
})
export class StorageService {

  TOKEN ='token';
  USER = 'user';
  DEVICE_ID = 'deviceId';
   _storage: Storage | null = null;

  constructor(private storage:Storage) {
    this.createStorage();
   }

   async createStorage(){
    const storage=await this.storage.create();
    this._storage=storage;
   }

  setUserToken(token:string){
    return localStorage.setItem(this.TOKEN,token);
  }

  getUserToken(){
    return localStorage.getItem(this.TOKEN);
  }

  setUser(user){
    return this._storage.set(this.USER,user);
  }

  getUser(){
    return this._storage.get(this.USER);
  }

  getDeviceId(){
    return this._storage.get(this.DEVICE_ID)
  }

  setDeviceId(deviceId){
    return this._storage.set(this.DEVICE_ID,deviceId);

  }

  clear(){
    this._storage.clear();
    localStorage.clear();
  }
}
