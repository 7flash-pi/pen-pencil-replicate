import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';


@Injectable({
  providedIn: 'root'
})
export class StorageService {

  TOKEN ='token';
  USER = 'user';
  DEVICE_ID = 'deviceId';
  YOUTUBE_DATA = 'youtube_data';
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

  setLocalData(key, value) {
    return localStorage.setItem(key, value);
  }

  getLocalData(key) {
      return localStorage.getItem(key);
  }
  setData(key, value) {
    this.setLocalData(key, true);
    return this.storage.set(key, value);
}

  getData(key) {
      return this.storage.get(key);
  }
  setYoutubeData(value) {
    return this.storage.set(this.YOUTUBE_DATA, value);
  }
  getYoutubeData() {
    return this.storage.get(this.YOUTUBE_DATA);
}


}

